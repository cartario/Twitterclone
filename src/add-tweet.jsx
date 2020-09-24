import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { TextareaAutosize, Button, CircularProgress  } from '@material-ui/core';
import FileIcon from '@material-ui/icons/BrokenImageOutlined';
import SmileIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

const AddTweet = ({classes, maxRows}) => {
  return (
    
    <Grid container > 
      <Grid item xs={1}>
        <Avatar alt="avatar" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
      </Grid>
      <Grid item xs={11}>
        <TextareaAutosize className={classes.addTweetTextarea} placeholder="Что происходит?"  rowsMax={maxRows}/>
        <div className={classes.addTweetControls}>
          <div className={classes.addTweetControlsLeftSide}>
            <FileIcon color="primary"/>
            <SmileIcon color="primary"/>
          </div>
          <div className={classes.addTweetControlsRightSide}>
            <span>280</span>
            <div className={classes.addTweetControlsCircularProgress}>
              <CircularProgress variant="static" value={50} size={20}/>
              <CircularProgress style={{color: `rgba(0,0,0,0.3)`, position: `absolute`, left: 0}} variant="static" value={100} size={20}/>
            </div>
            <Button className={classes.addTweetButton} variant="contained" color="primary">Твитнуть</Button>
          </div>
        </div>
      </Grid>
    </Grid>
    
  );
};

export default AddTweet;
