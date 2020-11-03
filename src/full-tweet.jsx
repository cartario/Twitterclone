import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Operation} from './store/ducks/full-tweet/operations';
import {Selector} from './store/ducks/full-tweet/selectors';
import Preloader from '@material-ui/core/CircularProgress';
import { ActionCreator } from './store/ducks/full-tweet/actions';
import { Paper, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import Avatar from '@material-ui/core/Avatar';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SendIcon from '@material-ui/icons/SendOutlined';
import {formatDate} from '../src/utils';
import {format} from 'date-fns';

const FullTweet = (props) => {
  
  const {classes} = props;
  const {id} = useParams();

  const tweet = useSelector(Selector.getFullTweet);
  const isLoaded = useSelector(Selector.getIsLoaded);
  const dispatch = useDispatch();  

  useEffect(()=>{
    
    dispatch(Operation.fetchFullTweet(id));
    return () =>{
      dispatch(ActionCreator.setFullTweet(undefined));
    }
  },[dispatch, id]);

  if(!isLoaded || !tweet){
    return <Preloader />;
  }

  const {user, text} = tweet;
  
  return (
    <>
      <Paper className={classes.tweetsItem}>            
            
        <div className={classes.fullTweetUser}>
          <Avatar className={classes.tweetAvatar} alt={`Аватарка пользователя ${user.fullName}`} src={user.avatarUrl} />
          <div>
            <b>{user.fullName}</b><br/>
            <span className={classes.tweetsUserName}>{user.userName}</span>
            <span className={classes.tweetsUserName}>-</span>
              <span className={classes.tweetsUserName}>{formatDate(new Date(tweet.createdAt))} назад</span>
          </div>
        </div>           

        <Typography className={classes.fullTweetText}>
          {text}
        </Typography>

        <div style={{textAlign: 'center'}}>
          <img alt="postImg" src={tweet.postUrl}/>
          <div className={classes.fullTweetControls}>
            <IconButton className={classes.tweetIconButton}>
              <CommentIcon className={classes.tweetIcon}/>
              <span style={{fontSize: 14}}>1</span>
            </IconButton>
            <IconButton className={classes.tweetIconButton}>
              <RepeatIcon className={classes.tweetIcon}/>                       
            </IconButton>
            <IconButton className={classes.tweetIconButton}>
              <LikeIcon className={classes.tweetIcon}/>                        
            </IconButton >
            <IconButton className={classes.tweetIconButton}>
              <SendIcon className={classes.tweetIcon}/>                        
            </IconButton>                      
          </div>
        </div>       
      </Paper>      
    </>);
};

export default FullTweet;
