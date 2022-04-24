import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as JQ from 'jquery';
import { DataService } from 'src/app/shared/service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('dynamicFormPopupBtn') dynamicFormPopupBtn!: ElementRef;

  public clickEventSubscription: Subscription;

  constructor(public element: ElementRef, public dataServices: DataService) {
    this.clickEventSubscription = this.dataServices
      .getClickEvent()
      .subscribe(() => {
        this.showHideSidebar();
      });
  }

  ngOnInit(): void {}

  //---------------------------------------------------------------------------------
  public getSidebar: any;
  public isShowSidebar = 0;
  showHideSidebar() {
    this.getSidebar = this.element.nativeElement.querySelector('.sidebar');
    if (this.isShowSidebar == 0) {
      this.getSidebar.style.marginLeft = '-5px';
      this.isShowSidebar = 1;
    } else {
      this.getSidebar.style.marginLeft = '-275px';
      this.isShowSidebar = 0;
    }
  }
}
