import { Component, Input, OnInit } from '@angular/core';
import { HN_Story } from 'src/app/models/hackernews.models';
import { HackerNewsService } from 'src/webservices/hacker-news.service';
import * as moment from "moment";
@Component({
  selector: 'app-story-view-item',
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss']
})
export class StoryViewComponent implements OnInit {

  @Input() id: number;
  @Input() storyId: number;
  @Input() showAddComments = false;
  @Input() showOtherComments = false;
  storyData: HN_Story;
  constructor(private hn_api: HackerNewsService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:variable-name
    this.hn_api.getStoryDetail(this.storyId).subscribe((res_story: HN_Story) => {
      if (res_story) {

        this.storyData = res_story;
        this.storyData.timeString = this.getTimeofStory(res_story.time);
      }
    });
  }

  //Utitlity Methods
  getBaseUrl(url) {
    if(url)
    {
    const urlParts = new URL(url).hostname.split('.');
    return urlParts
      .slice(0)
      .slice(-(urlParts.length === 4 ? 3 : 2))
      .join('.');
    }
  }

  getTimeofStory(time) {
    return moment.unix(time).fromNow();
  }

}
