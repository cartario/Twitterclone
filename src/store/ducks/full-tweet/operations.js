import {ActionCreator} from './actions';
import axios from 'axios';

export const Operation = {
  fetchFullTweet: (id) => (dispatch)=> {    
    dispatch(ActionCreator.fetchFullTweet());    
    return axios.get(`/tweets/${id}`)
    .then((res)=>{      
      dispatch(ActionCreator.setFullTweet(res.data.data));      
    })
    .catch((err)=>{
      dispatch(ActionCreator.setLoading());
      throw err;
    });
  },
  
};
