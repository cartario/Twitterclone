import {ActionTypes} from './actions';

const user = {
  fullName: ``,
  userName: ``,
  avatarUrl: ``,
};

const loadingStatus = {
  LOADED: `LOADED`,
  LOADING: `LOADING`,
  ERROR: `ERROR`,
  NEVER: `NEVER`,
};

const initialState = {
  hello: `hello`,
  items: [],
  loadingStatus: loadingStatus.NEVER,
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
    default:
      return state;
  }  
};

