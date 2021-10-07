import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public element: ElementRef,
  ) { }

  ngOnInit(): void {
  }
  //---------------------------------------------------------------------------------
  public getSidebar: any;
  public isShowSidebar = 0;
  showHideSidebar() {
    this.getSidebar = this.element.nativeElement.querySelector(".homepageSidebar");
    if (this.isShowSidebar == 0) {
      this.getSidebar.style.marginRight = "0px";
      this.isShowSidebar = 1;
    } else {
      this.getSidebar.style.marginRight = "-275px";
      this.isShowSidebar = 0;
    }
  }
}
