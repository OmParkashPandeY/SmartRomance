import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
     selector: 'app-dragable-card',
     templateUrl: './dragable-card.component.html',
     styleUrls: ['./dragable-card.component.scss']
})
export class DragableCardComponent implements OnInit {
     constructor(private _elementRef: ElementRef) {}

     ngOnInit(): void {}

    
}
