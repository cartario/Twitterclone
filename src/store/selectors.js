import {Pages} from './reducers/root-reducer';

export const Selector = {
  
  getHello: (state) => {
    
    return state[Pages.HELLO].hello
  },

};