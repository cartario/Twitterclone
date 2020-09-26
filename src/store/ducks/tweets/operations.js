import {ActionCreator} from './actions';
import axios from 'axios';

export const Operation = {
  fetchTweets: () => (dispatch)=> {
    dispatch(ActionCreator.fetchTweets());
    return axios.get("https://trycode.pw/c/BKB06.json")
    .then((res)=>{       
      dispatch(ActionCreator.setTweets(res.data));      
    })
    .catch((err)=>{
      dispatch(ActionCreator.setLoading());
      throw err;
    });
  },
};
