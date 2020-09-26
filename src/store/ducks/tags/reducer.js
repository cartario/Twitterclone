import {ActionTypes} from './actions';

const loadingStatus = {
  LOADED: `LOADED`,
  LOADING: `LOADING`,
  ERROR: `ERROR`,
  NEVER: `NEVER`,
};

const initialState = {  
  items: [],
  loadingStatus: loadingStatus.NEVER,
};

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  
  switch(type) {    
    case ActionTypes.SET_TAGS:
      return {...state, items: payload, loadingStatus: loadingStatus.LOADED};
    case ActionTypes.SET_LOADING:
      return {...state, loadingStatus: loadingStatus.LOADING};
    case ActionTypes.FETCH_TAGS:      
      return {...state, items: [], loadingStatus: loadingStatus.LOADING};
    default:
      return state;
  }  
};
