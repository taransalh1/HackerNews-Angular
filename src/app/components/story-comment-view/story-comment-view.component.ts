import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HN_Comment } from 'src/app/models/hackernews.models';
import { HackerNewsService } from 'src/webservices/hacker-news.service';
@Component({
  selector: 'app-story-comment-view',
  templateUrl: './story-comment-view.component.html',
  styleUrls: ['./story-comment-view.component.scss']
})
export class StoryCommentViewComponent implements OnInit {

 // Variables
 @Input() commentId;
 commentData: HN_Comment;
 showComments=true;
 constructor(private hn_Api: HackerNewsService) { }

 ngOnInit(): void {
   this.hn_Api.getCommentDetail(this.commentId).subscribe((res: HN_Comment) => {
     if (res) {
       this.commentData = res;
       this.commentData.timeString = this.getTimeofStory(res.time);
     }
   });
 }

 getTimeofStory(time) {
   return moment.unix(time).fromNow();
 }
}
