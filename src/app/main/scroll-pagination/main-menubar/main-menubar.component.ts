import { Component, OnInit } from '@angular/core';
import { DummyComments } from 'src/app/shared/data/dummy-comments';

@Component({
     selector: 'app-main-menubar',
     templateUrl: './main-menubar.component.html',
     styleUrls: ['./main-menubar.component.scss']
})
export class MainMenubarComponent implements OnInit {
     public commentList: DummyComments;

     public lengthOfCommentList: number = 0;
     public paginationIndex: number = 0;
     public isShowSpinner: boolean = false;
     constructor() {
          this.commentList = new DummyComments();
          this.lengthOfCommentList = this.commentList.commentsList.length;
     }

     ngOnInit(): void {
          if (this.lengthOfCommentList > 25) {
               this.paginationIndex = 25;
          } else {
               this.paginationIndex = this.lengthOfCommentList;
          }
     }

     onScroll(event: any) {
          if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 5) {
               if (this.lengthOfCommentList > this.paginationIndex) {
                    this.isShowSpinner = true;
                    setTimeout(() => {
                         this.paginationIndex = this.paginationIndex + 25;
                         this.isShowSpinner = false;
                    }, 1000);
               } else {
                    setTimeout(() => {
                         this.paginationIndex = this.lengthOfCommentList;
                         this.isShowSpinner = false;
                    }, 1000);
               }
          }
     }
}
