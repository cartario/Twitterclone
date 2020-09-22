import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import Avatar from '@material-ui/core/Avatar';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SendIcon from '@material-ui/icons/SendOutlined';

const Tweet = ({classes, text, user}) => {
  return (
    <li className={classes.tweetsItem}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Avatar className={classes.tweetAvatar} alt={`Аватарка пользователя ${user.name}`} src={user.avatarUrl} />
        </Grid>
        <Grid item xs={11}>
          <Typography className={classes.tweetsUser}>
          <b>{user.name}</b>
          <span className={classes.tweetsUserName}>{user.email}</span>
          <span className={classes.tweetsUserName}>-</span>
          <span className={classes.tweetsUserName}>{user.date}</span>
          </Typography>
          <Typography variant="body1">
            {text}
          </Typography>
          <div className={classes.tweetControls}>
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
        </Grid>
      </Grid>
    </li>
  );
};

export default Tweet;
