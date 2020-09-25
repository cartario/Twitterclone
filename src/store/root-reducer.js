import {combineReducers} from 'redux';
import {reducer as reducerTweets} from './ducks/tweets/reducer-tweets';

export const Pages = {
  TWEETS: `TWEETS`,
};

export const rootReducer = combineReducers({
  [Pages.TWEETS] : reducerTweets,
});
