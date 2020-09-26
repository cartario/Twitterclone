export const ActionTypes = {
  HELLO: `HELLO`,
  SET_TWEETS: `tweets/SET_TWEETS`,
  SET_LOADING: `tweets/SET_LOADING`,
  FETCH_TWEETS: `tweets/FETCH_TWEETS`,
};

export const ActionCreator = {
  hello: ()=> ({
    type: ActionTypes.HELLO
  }),

  setTweets: (payload) => ({
    type: ActionTypes.SET_TWEETS,
    payload: payload,
  }),
  
  setLoading: () => ({
    type: ActionTypes.SET_LOADING,    
  }),
  fetchTweets: () => ({
    type: ActionTypes.FETCH_TWEETS,    
  })
};
