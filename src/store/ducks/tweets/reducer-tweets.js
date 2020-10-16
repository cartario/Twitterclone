import {ActionTypes} from './actions';

const loadingStatus = {
  LOADED: `LOADED`,
  LOADING: `LOADING`,
  ERROR: `ERROR`,
  NEVER: `NEVER`,
};

export const addTweetLoadingStatus = {  
  LOADING: `LOADING`,
  ERROR: `ERROR`,
  NEVER: `NEVER`,
};

const initialState = {
  hello: `hello`,
  items: [],
  loadingStatus: loadingStatus.NEVER,
  addTweetLoadingStatus: addTweetLoadingStatus.NEVER,
};

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  
  switch(type) {
    case ActionTypes.HELLO:
      return {...state, hello: `hello new`};
    case ActionTypes.SET_TWEETS:      
      return {...state, items: payload, loadingStatus: loadingStatus.LOADED};
    case ActionTypes.SET_LOADING:
      return {...state, loadingStatus: loadingStatus.LOADING};
    case ActionTypes.FETCH_TWEETS:      
      return {...state, items: [], loadingStatus: loadingStatus.LOADING};
    case ActionTypes.ADD_TWEET:      
      return {...state, items: [payload, ...state.items], addTweetLoadingStatus: addTweetLoadingStatus.NEVER};
    case ActionTypes.ADD_TWEET_LOADING_STATUS:      
      return {...state, addTweetLoadingStatus: payload};
    default:
      return state;
  }  
};

