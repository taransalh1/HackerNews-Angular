import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/appstore/hacker-news.reducers';
import { AppState } from 'src/app/appstore/hacker-news.state';
import { HN_User } from 'src/app/models/hackernews.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   // Variables
   userData: HN_User;
   // Variables End Here
   constructor(private store: Store<AppState>) { }

   ngOnInit(): void {
     this.store
       // tslint:disable-next-line:variable-name
       .pipe(select(selectCurrentUser)).subscribe((_user) => {
         if (_user) {
           this.userData = _user;
         }
       });
   }

}
