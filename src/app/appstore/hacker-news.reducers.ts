
import { createAction, props, Action, createSelector } from '@ngrx/store';
import { HN_User, HN_Story } from '../models/hackernews.models';
import { AppState } from './hacker-news.state';
export const getUserData = createAction(
  'Get_UserData',
  props<{ userId?: any }>()
);
export const getUserDataSuccess = createAction(
  'Get_UserDataSuccess',
  props<{ payload: HN_User }>()
);
// These Actions are not Used but implemented to show how the application might scale
export const getTopStories = createAction(
  'Get_TopStories',
  props<{ userId?: any }>()
);
export const getTopStoriesSuccess = createAction(
  'Get_TopStoriesSuccess',
  props<{ payload: HN_Story[] }>()
);
////
export function HackerNewsReducers(state, action: Action): any {
  switch (action.type) {
    case 'Get_UserDataSuccess':
      return {
        ...state,
        userData: action['payload']
      };
    case 'Get_TopStoriesSuccess':
      return {
        ...state,
        topStories: action['payload']
      };
  }
  console.log(state);
}


// Below are some subscriptions for easy access
export const selectState = (state: AppState) => state['storeData'];
export const selectCurrentUser = createSelector(
  selectState,
  (state: AppState) => {
    return state ? state.userData : null;
  }
);
export const selectTopStories = createSelector(
  selectState,
  (state: AppState) => {
    return state ? state.topStories : null;
  }
);
