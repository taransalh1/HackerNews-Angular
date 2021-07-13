import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { StoryViewComponent } from './components/story-view/story-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HackerNewsReducers } from './appstore/hacker-news.reducers';
import { HackerNewsEffects } from './appstore/hacker-news.effects';
import { StoryDetailedViewComponent } from './pages/story-detailed-view/story-detailed-view.component';
import { StoryCommentViewComponent } from './components/story-comment-view/story-comment-view.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TopStoriesComponent,
    UserDetailComponent,
    StoryViewComponent,
    FooterComponent,
    HeaderComponent,
    StoryDetailedViewComponent,
    StoryCommentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      { storeData: HackerNewsReducers }
    ),
    // Note that you must instrument after importing StoreModule
    EffectsModule.forRoot([HackerNewsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
