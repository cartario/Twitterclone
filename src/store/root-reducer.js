import {combineReducers} from 'redux';
import {reducer as reducerTweets} from './ducks/tweets/reducer-tweets';
import {reducer as reducerTags} from './ducks/tags/reducer';
import {reducer as reducerFullTweet} from './ducks/full-tweet/reducer';

export const Pages = {
  TWEETS: `TWEETS`,
  TAGS: `TAGS`,
  FULL_TWEET: `FULL_TWEET`,
};

export const rootReducer = combineReducers({
  [Pages.TWEETS] : reducerTweets,
  [Pages.TAGS] : reducerTags,
  [Pages.FULL_TWEET] : reducerFullTweet,
});
