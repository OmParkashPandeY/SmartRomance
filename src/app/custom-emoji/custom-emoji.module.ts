import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomEmojiComponent } from './custom-emoji.component';

@NgModule({
     declarations: [CustomEmojiComponent],
     imports: [CommonModule],
     exports: [CustomEmojiComponent]
})
export class CustomEmojiModule {}
