import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { EMPTY } from "rxjs";
import { withLatestFrom, map, catchError, mergeMap } from "rxjs/operators";
import { HackerNewsService } from "src/webservices/hacker-news.service";
import { HN_User, HN_Story } from "../models/hackernews.models";
import { getUserDataSuccess, getTopStoriesSuccess } from "./hacker-news.reducers";
import { AppState } from "./hacker-news.state";

@Injectable()
export class HackerNewsEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private api$: HackerNewsService
  ) {

  }
  loadUserData$ = createEffect(() =>
    this.actions$.pipe(
      // tslint:disable-next-line:max-line-length
      ofType('Get_UserData'),
      withLatestFrom(
        this.store$
          .select((state) => state)
          .pipe(
            map((res) => res),
            catchError(() => EMPTY)
          )
      ),
      mergeMap(([req, tribe]) =>
        this.api$
          .getUserData(
            req['userId']
          )
          .pipe(
            map((userData: HN_User) =>
              getUserDataSuccess({ payload: userData })
            ),
            catchError(() => EMPTY)
          )
      )
    )
  );
  // This effect is not Used but implemented to show how the application might scale
  loadTopStories$ = createEffect(() =>
    this.actions$.pipe(
      // tslint:disable-next-line:max-line-length
      ofType('Get_TopStories'),
      withLatestFrom(
        this.store$
          .select((state) => state)
          .pipe(
            map((res) => res),
            catchError(() => EMPTY)
          )
      ),
      mergeMap(([req, tribe]) =>
        this.api$
          .getTopStories(
          )
          .pipe(
            map((stories: HN_Story[]) =>
              getTopStoriesSuccess({ payload: stories })
            ),
            catchError(() => EMPTY)
          )
      )
    )
  );
}
