import {combineReducers} from 'redux';
import {reducer as reducerPage1} from './reducer-page1';

export const Pages = {
  HELLO: `reducerPage12`,
};

export const rootReducer = combineReducers({
  [Pages.HELLO] : reducerPage1,
});
