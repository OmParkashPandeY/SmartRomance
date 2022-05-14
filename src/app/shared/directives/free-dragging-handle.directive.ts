import { Directive, ElementRef } from '@angular/core';

@Directive({
     selector: '[appFreeDraggingHandle]'
})
export class FreeDraggingHandleDirective {
     // prettier-ignore
     constructor(
          public elementRef: ElementRef<HTMLElement>
     ) { }
}
