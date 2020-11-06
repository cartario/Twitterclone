import {ActionTypes} from './actions';

const loadingStatus = {
  LOADED: `LOADED`,
  LOADING: `LOADING`,
  ERROR: `ERROR`,
  NEVER: `NEVER`,
};

const initialState = {  
  fullTweet: undefined,
  loadingStatus: loadingStatus.NEVER,
};

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  
  switch(type) {    
    case ActionTypes.SET_FULL_TWEET:
      return {...state, fullTweet: payload, loadingStatus: loadingStatus.LOADED};
    case ActionTypes.SET_LOADING:
      return {...state, loadingStatus: loadingStatus.LOADING};
    case ActionTypes.FETCH_FULL_TWEET:      
      return {...state, fullTweet: undefined, loadingStatus: loadingStatus.LOADING};    
    default:
      return state;
  }  
};
