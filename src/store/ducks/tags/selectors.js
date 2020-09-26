import {Pages} from '../../root-reducer';

export const Selector = {  
  getTags: (state) => state[Pages.TAGS].items,
  getIsLoaded: (state) => state[Pages.TAGS].loadingStatus === `LOADED`,
};
