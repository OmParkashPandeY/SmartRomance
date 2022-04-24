import { Component, OnInit } from '@angular/core';
import { BabyNameList } from 'src/app/shared/data/baby-name';

@Component({
     selector: 'app-left-menubar',
     templateUrl: './left-menubar.component.html',
     styleUrls: ['./left-menubar.component.scss']
})
export class LeftMenubarComponent implements OnInit {
     public babyNameList: BabyNameList;
     constructor() {
          this.babyNameList = new BabyNameList();
     }

     ngOnInit(): void {}
}
