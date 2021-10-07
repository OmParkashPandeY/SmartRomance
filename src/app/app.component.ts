import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.isUserLoggedIn();

  }
  title = 'my-template';

  public showHomeTemplate = false;
  public isUserLoggedIn() {
    if (localStorage.getItem('isUserLoggedIn') == "1") {
      this.showHomeTemplate = true;
    } else {
      this.showHomeTemplate = false;
    }

  }
}
