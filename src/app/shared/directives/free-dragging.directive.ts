import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ContentChild, Directive, ElementRef, Inject, Input, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { FreeDraggingHandleDirective } from './free-dragging-handle.directive';

@Directive({
     selector: '[appFreeDragging]'
})
export class FreeDraggingDirective implements AfterViewInit, OnDestroy {
     @ContentChild(FreeDraggingHandleDirective) handle: FreeDraggingHandleDirective;

     public draggingBoundaryElement: HTMLElement | HTMLBodyElement;
     public readonly boundary = 'body';
     @Input() boundaryQuery = this.boundary;

     public handleElement: HTMLElement;
     public subscriptions: Subscription[] = [];
     public element: HTMLElement;

     // prettier-ignore
     constructor(
      private elementRef: ElementRef,
      @Inject(DOCUMENT)
      private document: any
    ) { }

     ngAfterViewInit(): void {
          this.draggingBoundaryElement = (this.document as Document).querySelector(this.boundaryQuery);
          if (!this.draggingBoundaryElement) {
               throw new Error("Couldn't find any element with query: " + this.boundaryQuery);
          } else {
               this.element = this.elementRef.nativeElement as HTMLElement;
               this.handleElement = this.handle?.elementRef?.nativeElement || this.element;
               this.initDrag();
          }
     }

     initDrag(): void {
          const drag$ = fromEvent<MouseEvent>(this.document, 'mousemove').pipe();
          const dragEnd$ = fromEvent<MouseEvent>(this.document, 'mouseup');
          const dragStart$ = fromEvent<MouseEvent>(this.handleElement, 'mousedown');

          let initialX: number,
               initialY: number,
               currentX = 0,
               currentY = 0;

          let dragSub: Subscription;

          const minBoundX = this.draggingBoundaryElement.offsetLeft;
          const minBoundY = this.draggingBoundaryElement.offsetTop;
          const maxBoundX = minBoundX + this.draggingBoundaryElement.offsetWidth - this.element.offsetWidth;
          const maxBoundY = minBoundY + this.draggingBoundaryElement.offsetHeight - this.element.offsetHeight;

          const dragStartSub = dragStart$.subscribe((event: MouseEvent) => {
               initialX = event.clientX - currentX;
               initialY = event.clientY - currentY;
               this.element.classList.add('free-dragging');

               dragSub = drag$.subscribe((event: MouseEvent) => {
                    event.preventDefault();

                    const x = event.clientX - initialX;
                    const y = event.clientY - initialY;

                    currentX = Math.max(minBoundX, Math.min(x, maxBoundX));
                    currentY = Math.max(minBoundY, Math.min(y, maxBoundY));

                    this.element.style.transform = 'translate3d(' + currentX + 'px, ' + currentY + 'px, 0)';
               });
          });

          const dragEndSub = dragEnd$.subscribe(() => {
               initialX = currentX;
               initialY = currentY;
               this.element.classList.remove('free-dragging');
               if (dragSub) {
                    dragSub.unsubscribe();
               }
          });

          this.subscriptions.push.apply(this.subscriptions, [dragStartSub, dragSub, dragEndSub]);
     }

     ngOnDestroy(): void {
          this.subscriptions.forEach((s) => s?.unsubscribe());
     }
}
