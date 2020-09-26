export const ActionTypes = {  
  SET_TAGS: `tags/SET_TAGS`,
  SET_LOADING: `tags/SET_LOADING`,
  FETCH_TAGS: `tags/FETCH_TAGS`,
};

export const ActionCreator = {
  setTags: (payload) => ({
    type: ActionTypes.SET_TAGS,
    payload: payload,
  }),
  
  setLoading: () => ({
    type: ActionTypes.SET_LOADING,    
  }),
  fetchTags: () => ({
    type: ActionTypes.FETCH_TAGS,    
  })

};
