import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HN_Story } from 'src/app/models/hackernews.models';
import { HackerNewsService } from 'src/webservices/hacker-news.service';

@Component({
  selector: 'app-story-detailed-view',
  templateUrl: './story-detailed-view.component.html',
  styleUrls: ['./story-detailed-view.component.scss']
})
export class StoryDetailedViewComponent implements OnInit {

  // Variables
  storyId;
  storyData: HN_Story;
  constructor(private route: ActivatedRoute, private hn_Api: HackerNewsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params && params.id) {
        this.storyId = params.id;
      }
    });
  }
}
