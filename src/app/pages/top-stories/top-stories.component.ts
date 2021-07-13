import { HN_Story } from './../../models/hackernews.models';
import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from 'src/webservices/hacker-news.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {
  // Variables
  topstories: HN_Story[];
  constructor(private hn_api: HackerNewsService) { }

  ngOnInit(): void {
    this.getTopStories();
  }
  getTopStories() {
    this.hn_api.getTopStories().subscribe((stories: HN_Story[]) => {
      if (stories) {
        this.topstories = stories.slice(0, 5);
      }
    });
  }

}
