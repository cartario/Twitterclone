export const ActionTypes = {
  HELLO: `HELLO`,
  SET_TWEETS: `tweets/SET_TWEETS`,

};

export const ActionCreator = {
  hello: ()=> ({
    type: ActionTypes.HELLO
  }),

  setTweets: (payload) => ({
    type: ActionTypes.SET_TWEETS,
    payload: payload,
  })
};
