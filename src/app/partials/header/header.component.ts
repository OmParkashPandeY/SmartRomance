import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('dynamicFormPopupBtn') dynamicFormPopupBtn!: ElementRef;

  constructor(
    private element: ElementRef,
    private _router: Router,
    private dataServices: DataService
  ) {}

  ngOnInit(): void {}
  //---------------------------------------------------------------------------------
  showHideSideBar() {
    this.dataServices.sendClickEvent();
    // console.log("Hello World");
  }
  //---------------------------------------------------------------------------------

  logoutUser() {
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('usersDetails');
    this._router.navigateByUrl('/home');
  }
  //---------------------------------------------------------------------------------
}
