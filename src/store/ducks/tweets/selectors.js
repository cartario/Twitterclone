import {Pages} from '../../root-reducer';

export const Selector = {  
  getHello: (state) => {    
    return state[Pages.TWEETS].hello
  },

  getTweets: (state) => state[Pages.TWEETS].items,
  getIsLoaded: (state) => state[Pages.TWEETS].loadingStatus === `LOADED`,
  getIsLoadingAddTweet: (state) => state[Pages.TWEETS].addTweetLoadingStatus === `LOADING`,
  getIsErrorAddTweet: (state) => state[Pages.TWEETS].addTweetLoadingStatus === `ERROR`,
};

