import { Component, OnInit } from '@angular/core';
import { EmojiList } from '../shared/emoji-list/emoji-list';

@Component({
     selector: 'app-emoji-picker',
     templateUrl: './emoji-picker.component.html',
     styleUrls: ['./emoji-picker.component.scss']
})
export class EmojiPickerComponent implements OnInit {
     public selectedEmoji: any = '';
     public emojiList: EmojiList;
     public EmojiPeople: any = [];
     public Activity: any = [];
     public Flags: any = [];
     public FoodDring: any = [];
     public Nature: any = [];
     public Objects: any = [];
     public Symbols: any = [];
     public TravelPlaces: any = [];

     constructor() {
          this.emojiList = new EmojiList();
     }

     ngOnInit(): void {
          this.EmojiPeople = this.emojiList.emojiObject.People;
          this.Activity = this.emojiList.emojiObject.Activity;
          this.Flags = this.emojiList.emojiObject.Flags;
          this.FoodDring = this.emojiList.emojiObject.FoodDring;
          this.Nature = this.emojiList.emojiObject.Nature;
          this.Objects = this.emojiList.emojiObject.Objects;
          this.Symbols = this.emojiList.emojiObject.Symbols;
          this.TravelPlaces = this.emojiList.emojiObject.TravelPlaces;
     }

     public pickEmoji(payload: any) {
          this.selectedEmoji = this.selectedEmoji + payload.emoji;
     }
}
