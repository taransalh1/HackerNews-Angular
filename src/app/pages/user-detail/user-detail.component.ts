import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HN_User } from 'src/app/models/hackernews.models';
import { HackerNewsService } from 'src/webservices/hacker-news.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId;
  userData: HN_User;
  constructor(private route: ActivatedRoute, private hn_Api: HackerNewsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params && params.id) {
        this.userId = params.id;
        this.getUserDetails();
      }
    });
  }
  getUserDetails() {
    this.hn_Api.getUserData(this.userId).subscribe((res: HN_User) => {
      if (res) {
        this.userData = res;
      }
    });
  }

}
