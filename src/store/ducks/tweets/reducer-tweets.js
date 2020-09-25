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
  switch(action.type) {
    case ActionTypes.HELLO:
      return {...state, hello: `hello new`}

    default:
      return state;
  }  
};

