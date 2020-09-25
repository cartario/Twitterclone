export const ActionTypes = {
  HELLO: `HELLO`,
  SET_TWEETS: `tweets/SET_TWEETS`,
  SET_LOADING: `tweets/SET_LOADING`,
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
  })
};
