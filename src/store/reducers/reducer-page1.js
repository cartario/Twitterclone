import {ActionTypes} from '../actions';

const initialState = {
  hello: 1,
};

export const reducer = (state = initialState, action) => { 
  switch(action.type) {
    case ActionTypes.HELLO:
      return {...state, hello: 23}

    default:
      return state;
  }  
};

