import {ActionCreator} from './actions';
import axios from 'axios';

export const Operation = {
  fetchTags: () => (dispatch)=> {
    dispatch(ActionCreator.fetchTags());
    return axios.get("/tags")
    .then((res)=>{       
      dispatch(ActionCreator.setTags(res.data));      
    })
    .catch((err)=>{
      dispatch(ActionCreator.setLoading());
      throw err;
    });
  },
};
