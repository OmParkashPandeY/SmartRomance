import { AfterViewInit, ContentChild, Directive, ElementRef, Inject, Input, OnDestroy } from '@angular/core';
import { FreeDraggingHandleDirective } from './free-dragging-handle.directive';
import { fromEvent, Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Directive({
     selector: '[appFreeDragging]'
})
export class FreeDraggingDirective implements AfterViewInit, OnDestroy {
     @ContentChild(FreeDraggingHandleDirective) handler: FreeDraggingHandleDirective;

     public draggingBoundaryElement: HTMLElement | HTMLBodyElement;
     public readonly boundary = 'body';
     @Input() boundaryQuery = this.boundary;

     @Input() currentX: number = 0;
     @Input() currentY: number = 0;

     public element: HTMLElement;
     public handleElement: HTMLElement;
     public subscriptions: Subscription[] = [];

     // prettier-ignore
     constructor(
      private elementRef: ElementRef,
      @Inject(DOCUMENT)
      private document: any
    ) { }

     ngAfterViewInit(): void {
          this.draggingBoundaryElement = (this.document as Document).querySelector(this.boundaryQuery);
          if (!this.draggingBoundaryElement) {
               console.log("Couldn't find any element with query: " + this.boundaryQuery);
          } else {
               this.element = this.elementRef.nativeElement as HTMLElement;
               this.handleElement = this.handler?.elementRef?.nativeElement || this.element;
               this.initDrag();
          }
     }

     initDrag(): void {
          const drag$ = fromEvent<MouseEvent>(this.document, 'mousemove').pipe();
          const dragEnd$ = fromEvent<MouseEvent>(this.document, 'mouseup');
          const dragStart$ = fromEvent<MouseEvent>(this.handleElement, 'mousedown');

          let initialX: number,
               initialY: number,
               currentX = this.currentX,
               currentY = this.currentY;

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
