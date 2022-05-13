import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeDraggingDirective } from './directives/free-dragging.directive';
import { FreeDraggingHandleDirective } from './directives/free-dragging-handle.directive';

@NgModule({
     declarations: [FreeDraggingDirective, FreeDraggingHandleDirective],
     imports: [CommonModule],
     exports: [FreeDraggingDirective, FreeDraggingHandleDirective] // Added
})
export class SharedModule {}
