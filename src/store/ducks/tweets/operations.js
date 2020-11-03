import {ActionCreator} from './actions';
import {addTweetLoadingStatus} from './reducer-tweets';
import axios from 'axios';

export const Operation = {
  fetchTweets: () => (dispatch)=> {
    dispatch(ActionCreator.fetchTweets());
    return axios.get("/tweets")
    .then((res)=>{  
      const data = res.data.data;
         
      dispatch(ActionCreator.setTweets(data));      
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
      
        fullName: "Lang Miles",
        userName: "shawn",
        avatarUrl: "https://source.unsplash.com/random/100x100?2",
      
      postUrl: "https://source.unsplash.com/random/500x500?2"
    };    
    dispatch(ActionCreator.setLoadingAddTweet(addTweetLoadingStatus.LOADING));    
    return axios.post("/tweets/", data)
    .then((res)=> {      
      dispatch(ActionCreator.addTweet(res.data.data));      
    })
    .catch((err)=>{      
      dispatch(ActionCreator.setLoadingAddTweet(addTweetLoadingStatus.ERROR));
      throw err;
    });
  },
};
