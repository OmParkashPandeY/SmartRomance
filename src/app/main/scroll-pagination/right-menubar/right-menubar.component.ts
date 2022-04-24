import { Component, OnInit } from '@angular/core';
import { BabyNameList } from 'src/app/shared/data/baby-name';

@Component({
     selector: 'app-right-menubar',
     templateUrl: './right-menubar.component.html',
     styleUrls: ['./right-menubar.component.scss']
})
export class RightMenubarComponent implements OnInit {
     public babyNameList: BabyNameList;
     constructor() {
          this.babyNameList = new BabyNameList();
     }

     ngOnInit(): void {}
}
