import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  map,
  retry,
} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  apiUrl = environment.apiUrl;
  constructor(private httpApi: HttpClient) { }

  // API Implementations
  
  getUserData(userId) {
    return this.httpApi
      .get(`${this.apiUrl}/user/${userId}.json`)
      .pipe(retry(2));
  }

  getTopStories() {
    return this.httpApi
      .get(`${this.apiUrl}/topstories.json`)
      .pipe(retry(2));
  }

  getStoryDetail(storyId) {
    return this.httpApi
      .get(`${this.apiUrl}/item/${storyId}.json`)
      .pipe(retry(2));
  }

  getCommentDetail(commentid) {
    return this.httpApi
      .get(`${this.apiUrl}/item/${commentid}.json`)
      .pipe(retry(2));
  }

}
