import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import * as AOS from 'aos';

@Component({
     selector: 'app-network-home-page',
     templateUrl: './network-home-page.component.html',
     styleUrls: ['./network-home-page.component.scss']
})
export class NetworkHomePageComponent implements OnInit {
     @ViewChild('sidebarButton') sidebarButton: ElementRef;
     @ViewChild('homepageSidebar') homepageSidebar: ElementRef;

     // prettier-ignore
     constructor(
          private _elementRef: ElementRef,
     ) {}

     ngOnInit(): void {
          AOS.init();
     }

     public showHideSidebar(status: boolean) {
          let element = $(this._elementRef.nativeElement).find('#homepage-sidebar');
          if (status) {
               element.css({ 'margin-left': '0px' });
          } else {
               element.css({ 'margin-left': '-280px' });
          }
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

     @HostListener('document:click', ['$event'])
     onPostDocumentClick(event: MouseEvent) {
          try {
               let a = this.sidebarButton.nativeElement.contains(event.target);
               let b = this.homepageSidebar.nativeElement.contains(event.target);

               if (a || b) {
               } else {
                    this.showHideSidebar(false);
               }
          } catch (error) {}
     }
}
