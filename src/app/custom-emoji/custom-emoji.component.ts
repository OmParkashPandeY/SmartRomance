import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EmojiList } from '../shared/emoji-list/emoji-list';
import * as $ from 'jquery';
@Component({
     selector: 'app-custom-emoji',
     templateUrl: './custom-emoji.component.html',
     styleUrls: ['./custom-emoji.component.scss']
})
export class CustomEmojiComponent implements OnInit {
     @ViewChild('customEmojiButton') customEmojiButton: ElementRef;
     @ViewChild('emojiCardField') emojiCardField: ElementRef;

     @Output() onSelectEmoji: EventEmitter<any> = new EventEmitter();
     @Input() marginX: any = '';
     @Input() marginY: any = '';
     @Input() emojiId: any = '';
     @Input() iconClass: any = '';

     public styleObject: any = {};
     public emojiList: EmojiList;
     public Flags: any = [];
     public Nature: any = [];
     public Objects: any = [];
     public Symbols: any = [];
     public Activity: any = [];
     public FoodDring: any = [];
     public EmojiPeople: any = [];
     public TravelPlaces: any = [];
     // prettier-ignore
     constructor(
          private _elementRef:ElementRef,
     ) {
          this.emojiList = new EmojiList();
         
     }

     ngOnInit(): void {
          this.Flags = this.emojiList.emojiObject.Flags;
          this.Nature = this.emojiList.emojiObject.Nature;
          this.Symbols = this.emojiList.emojiObject.Symbols;
          this.Objects = this.emojiList.emojiObject.Objects;
          this.Activity = this.emojiList.emojiObject.Activity;
          this.EmojiPeople = this.emojiList.emojiObject.People;
          this.FoodDring = this.emojiList.emojiObject.FoodDring;
          this.TravelPlaces = this.emojiList.emojiObject.TravelPlaces;
          this.setStyle();
     }

     public setStyle() {
          this.styleObject = { 'margin-left': this.marginX, 'margin-top': this.marginY };
     }

     public pickEmoji(clickedEntry: any): void {
          this.onSelectEmoji.emit(clickedEntry);
     }

     public toggleEmojiCard(status: boolean) {
          let element = $(this._elementRef.nativeElement).find('#' + this.emojiId);
          element.show();
          if (status) {
               element.show();
          } else {
               element.hide();
          }
     }

     public scrollToElement(element: any) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
     }

     @HostListener('document:click', ['$event'])
     onPostDocumentClick(event: MouseEvent) {
          try {
               let a = this.customEmojiButton.nativeElement.contains(event.target);
               let b = this.emojiCardField.nativeElement.contains(event.target);

               if (a || b) {
               } else {
                    $(this._elementRef.nativeElement)
                         .find('#' + this.emojiId)
                         .hide();
               }
          } catch (error) {}
     }
}
