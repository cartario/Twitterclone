import {ActionCreator} from './actions';
import axios from 'axios';

export const Operation = {
  fetchFullTweet: (id) => (dispatch)=> {
    dispatch(ActionCreator.fetchFullTweet());
    return axios.get("/tweets/?_id=" + id)
    .then((res)=>{      
      dispatch(ActionCreator.setFullTweet(res.data[0]));      
    })
    .catch((err)=>{
      dispatch(ActionCreator.setLoading());
      throw err;
    });
  },
  
};
