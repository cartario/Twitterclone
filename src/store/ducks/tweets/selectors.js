import {Pages} from '../../root-reducer';

export const Selector = {  
  getHello: (state) => {    
    return state[Pages.TWEETS].hello
  },

  getTweets: (state) => state[Pages.TWEETS].items,
};

