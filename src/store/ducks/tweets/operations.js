import {ActionCreator} from './actions';
import axios from 'axios';

export const Operation = {
  fetchTweets: () => (dispatch)=> {
    dispatch(ActionCreator.fetchTweets());
    return axios.get("/tweets")
    .then((res)=>{       
      dispatch(ActionCreator.setTweets(res.data));      
    })
    .catch((err)=>{
      dispatch(ActionCreator.setLoading());
      throw err;
    });
  },
  fetchAddTweet: (text) => (dispatch) => {
    const data = {
      text: text,
      _id: Math.random().toString(36).substr(2),
      user: {
        "fullName": "Lang Miles",
        "userName": "shawn",
        "avatarUrl": "https://source.unsplash.com/random/100x100?2"
      },
      postUrl: "https://source.unsplash.com/random/500x500?2"
    };
    return axios.post("/tweets/", data)
    .then((res)=> {
      dispatch(ActionCreator.addTweet(res.data));      
    })
    .catch((err)=>{
      dispatch(ActionCreator.setLoading());
      throw err;
    });
  },
};
