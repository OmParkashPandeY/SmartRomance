import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-scroll-pagination',
     templateUrl: './scroll-pagination.component.html',
     styleUrls: ['./scroll-pagination.component.scss']
})
export class ScrollPaginationComponent implements OnInit {
     public screenHeight: any = 0;
     public screenWidth: any = 0;
     constructor() {}

     ngOnInit(): void {
          this.screenHeight = window.screen.height;
          this.screenWidth = window.screen.width;
     }
}
