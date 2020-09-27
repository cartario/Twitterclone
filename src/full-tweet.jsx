import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Operation} from './store/ducks/full-tweet/operations';
import {Selector} from './store/ducks/full-tweet/selectors';
import Tweet from './tweet';
import Preloader from '@material-ui/core/CircularProgress';

const FullTweet = (props) => {
  const {classes} = props;
  const {id} = useParams();

  const tweet = useSelector(Selector.getFullTweet);
  const isLoaded = useSelector(Selector.getIsLoaded);
  const dispatch = useDispatch(); 

  useEffect(()=>{
    dispatch(Operation.fetchFullTweet(id))
  },[dispatch, id]);

  if(!isLoaded){
    return <Preloader />;
  }
  
  return (
    <>
      <Tweet classes={classes} text={tweet.text} user={tweet.user} id={tweet._id}/>
      <img alt="postImg" src={tweet.postUrl}/>
    </>);
};

export default FullTweet;
