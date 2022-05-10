import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomEmojiComponent } from './custom-emoji.component';

// prettier-ignore
@NgModule({
  declarations: [
   CustomEmojiComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
     CustomEmojiComponent
  ]
})
export class CustomEmojiModule { }
