import {combineReducers} from 'redux';
import {reducer as reducerTweets} from './ducks/tweets/reducer-tweets';
import {reducer as reducerTags} from './ducks/tags/reducer';

export const Pages = {
  TWEETS: `TWEETS`,
  TAGS: `TAGS`,
};

export const rootReducer = combineReducers({
  [Pages.TWEETS] : reducerTweets,
  [Pages.TAGS] : reducerTags,
});
