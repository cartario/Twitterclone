import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import SignInModal from './signin-modal';
import SignUpModal from './signup-modal';

const useStyles = makeStyles((theme)=>({
  wrapper: {    
    display: `flex`,
    height: `100vh`,
    border: `1px solid grey`,
  },
  blueSide: {
    position: `relative`,
    flex: `0 0 50%`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `#1DA1F2`,
    overflow: `hidden`,
  },
  blueSideList: {
    position: `relative`,
    margin: 0,
    padding: 0,
    listStyle: `none`,
    '& h6': {
      color: `white`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
    },
  },
  blueSideListIcon: {    
    marginRight: 10,
  },
  blueSideBigIcon: {
    position: `absolute`,
    top: `35%`,
    left: `45%`,
    width: `250%`,
    height: `250%`,
    transform: `translate(-50%, -50%)`,
  },
  loginSide: {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    flex: `0 0 50%`,
    backgroundColor: `white`,    
  }, 
  loginSideWrapper: {
    maxWidth: `80%`,    
  }, 
  button: {    
    margin: `5px auto`,
    boxSizing: `border-box`,
    borderRadius: `25px`, 
  },
  signUpButton: {
    marginBottom: theme.spacing(4),
  },
}));

export default (props)=> {
  const classes = useStyles();

  

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon className={classes.blueSideBigIcon} color="secondary"/>  
        <ul className={classes.blueSideList}>
          <li>
            <Typography variant="h6">
              <SearchOutlinedIcon className={classes.blueSideListIcon}/>
              point1
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <PeopleAltOutlinedIcon className={classes.blueSideListIcon}/>
              point2
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
            <ChatBubbleOutlineOutlinedIcon className={classes.blueSideListIcon}/>
            point3</Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper} style={{textAlign: `left`}}>          
          <TwitterIcon color="primary"/>          
          <Typography variant="h3">Title</Typography>
          <Typography variant="h4">SmallSmaller titleSmaller titleer title</Typography>          
          <SignUpModal title={`Зарегистрироваться`} classes={classes}/>      
          <SignInModal title={`Войти`} classes={classes}/>
        </div>
      </section>      
    </div>
  );
};
