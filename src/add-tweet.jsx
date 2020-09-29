import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { TextareaAutosize, Button, CircularProgress  } from '@material-ui/core';
import FileIcon from '@material-ui/icons/BrokenImageOutlined';
import SmileIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import {useDispatch, useSelector} from 'react-redux';
import {Operation} from './store/ducks/tweets/operations';
import {Selector} from './store/ducks/tweets/selectors';
import Snackbar from '@material-ui/core/Snackbar';

const TEXT_MAX_LENGTH = 10;

const AddTweet = ({classes, maxRows}) => {
  const [text, setText] = useState(``);
  const dispatch = useDispatch();
  const isAddTweetLoading = useSelector(Selector.getIsLoadingAddTweet);
  const isAddTweetError = useSelector(Selector.getIsErrorAddTweet);

  const textLength = text.length;
  const progressBar = (1- (TEXT_MAX_LENGTH - textLength) / TEXT_MAX_LENGTH) * 100;  
  const isValid = TEXT_MAX_LENGTH - textLength < 0 ? false : true;

  const handleChange = (e) => {    
    setText(e.target.value);      
  };

  const handleClickAddTweet = () => {
    setText(text);    
    dispatch(Operation.fetchAddTweet(text));    
  };

  return (    
    <Grid container > 
      <Grid item xs={1}>
        <Avatar alt="avatar" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
      </Grid>
      <Grid item xs={11}>
        <TextareaAutosize className={classes.addTweetTextarea} placeholder="Что происходит?"  onChange={handleChange} rowsMax={maxRows}/>
        <div className={classes.addTweetControls}>
          <div className={classes.addTweetControlsLeftSide}>
            <FileIcon color="primary"/>
            <SmileIcon color="primary"/>  
          </div>
          <div className={classes.addTweetControlsRightSide}>
            <span style={isValid ? undefined: {color: `red`}}>{TEXT_MAX_LENGTH - textLength}</span>
            <div className={classes.addTweetControlsCircularProgress}>
              <CircularProgress variant="static" value={isValid ? progressBar : 100} size={20}
              style={isValid ? undefined: {color: `red`}}
              />
              <CircularProgress style={{color: `rgba(0,0,0,0.3)`, position: `absolute`, left: 0}} variant="static" value={100} size={20}/>
            </div>            
            <Button 
              disabled={!isValid || !text || isAddTweetLoading}
              className={classes.addTweetButton} variant="contained" color="primary"
              onClick={handleClickAddTweet}
            >
              {isAddTweetLoading && <CircularProgress size={20}/>}
              Твитнуть
            
            </Button>
            
          </div>
        </div>
      </Grid>
    </Grid>    
  );
};

export default AddTweet;
