export const ActionTypes = {  
  SET_FULL_TWEET: `fulltweet/SET_FULL_TWEET`,
  SET_LOADING: `fulltweet/SET_LOADING`,
  FETCH_FULL_TWEET: `fulltweet/FETCH_FULL_TWEET`,
  
};

export const ActionCreator = {
  setFullTweet: (payload) => ({
    type: ActionTypes.SET_FULL_TWEET,
    payload: payload,
  }),
  
  setLoading: () => ({
    type: ActionTypes.SET_LOADING,    
  }),
  fetchFullTweet: () => ({
    type: ActionTypes.FETCH_FULL_TWEET,    
  }),  
};
