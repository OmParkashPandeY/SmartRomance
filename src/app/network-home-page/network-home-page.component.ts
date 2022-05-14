import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as AOS from 'aos';

@Component({
     selector: 'app-network-home-page',
     templateUrl: './network-home-page.component.html',
     styleUrls: ['./network-home-page.component.scss']
})
export class NetworkHomePageComponent implements OnInit {
     // prettier-ignore
     constructor(
          private _elementRef: ElementRef,
     ) {}

     ngOnInit(): void {
          AOS.init();
     }

     @HostListener('window:scroll', ['$event'])
     scrollHandler(event: any) {
          try {
               let element = $(this._elementRef.nativeElement).find('#homepage-header');

               if (window.pageYOffset >= 10) {
                    element.css({
                         'background-color': 'white',
                         'box-shadow': '10px 10px 10px #c1bfbf'
                    });
               } else {
                    element.css({
                         'background-color': 'transparent',
                         'box-shadow': 'none'
                    });
               }
          } catch (error) {}
     }
}
