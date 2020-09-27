import {Pages} from '../../root-reducer';

export const Selector = {  
  getFullTweet: (state) => state[Pages.FULL_TWEET].fullTweet,
  getIsLoaded: (state) => state[Pages.FULL_TWEET].loadingStatus === `LOADED`,
};
