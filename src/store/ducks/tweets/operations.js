import Axios from 'axios';
import {ActionCreator} from './actions';
import axios from 'axios';

export const Operation = {
  load: () => (dispatch)=> {    
    return axios.get("https://trycode.pw/c/BKB06.json")
    .then((res)=>{
      console.log(res);    
      dispatch(ActionCreator.hello());
    })
    .catch((err)=>{
      throw err;
    });
  },
};
