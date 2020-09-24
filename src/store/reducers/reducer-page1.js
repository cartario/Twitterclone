import {ActionTypes} from '../actions';

const initialState = {
  hello: `hello`,
};

export const reducer = (state = initialState, action) => { 
  switch(action.type) {
    case ActionTypes.HELLO:
      return {...state, hello: `hello new`}

    default:
      return state;
  }  
};

