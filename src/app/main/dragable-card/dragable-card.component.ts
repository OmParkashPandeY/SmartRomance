import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
     selector: 'app-dragable-card',
     templateUrl: './dragable-card.component.html',
     styleUrls: ['./dragable-card.component.scss']
})
export class DragableCardComponent implements OnInit {
     public isShowEmoji: boolean = false;
     constructor(private _elementRef: ElementRef) {}

     ngOnInit(): void {}

     public showHideEmojiCard(status: any) {
          if (status) {
               this.isShowEmoji = true;
          } else {
               this.isShowEmoji = false;
          }
     }
}
