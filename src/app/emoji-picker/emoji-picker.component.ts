import { Component, OnInit } from '@angular/core';
import { EmojiList } from '../shared/emoji-list/emoji-list';

@Component({
     selector: 'app-emoji-picker',
     templateUrl: './emoji-picker.component.html',
     styleUrls: ['./emoji-picker.component.scss']
})
export class EmojiPickerComponent implements OnInit {
     public emojiButton: any = '<i class="far fa-grin-alt"></i>';
     public selectedEmoji: any = '';
     constructor() {}
     ngOnInit(): void {}

     public getSelectedEmoji(event: any) {
          this.selectedEmoji = this.selectedEmoji + event.emoji;
     }
}
