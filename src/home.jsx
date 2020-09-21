import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import UserIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';


const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: `left`,
  },
  sideMenuList: {
    margin: 0,
    padding: 0,
    listStyle: `none`,
  },
  sideMenuItem: {
    display: `flex`,
    alignItems: `center`,
  },
  sideMenuItemLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  sideMenuIcon: {
    fontSize: 30,
  },
  logo: {
    fontSize: 32,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>        
        <Grid  item xs={3}>
          <Paper style={{height: `100vh`}} className={classes.paper}>            
            <ul className={classes.sideMenuList}>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <TwitterIcon className={classes.logo} color="primary"/>
                </IconButton>                
              </li>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <NotificationsIcon className={classes.sideMenuIcon} />
                </IconButton>   
                <Typography className={classes.sideMenuItemLabel} >Notifications</Typography>
              </li>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <MessageIcon className={classes.sideMenuIcon} />
                </IconButton>   
                <Typography className={classes.sideMenuItemLabel} >Messages</Typography>
              </li>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <BookmarkIcon className={classes.sideMenuIcon} />
                </IconButton>   
                <Typography className={classes.sideMenuItemLabel} >BookMarks</Typography>
              </li>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <RepeatIcon className={classes.sideMenuIcon} />
                </IconButton>   
                <Typography className={classes.sideMenuItemLabel} >Repeats</Typography>
              </li>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <UserIcon className={classes.sideMenuIcon} />
                </IconButton>   
                <Typography className={classes.sideMenuItemLabel} >User</Typography>
              </li>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <SearchIcon className={classes.sideMenuIcon} />
                </IconButton>   
                <Typography className={classes.sideMenuItemLabel} >Search</Typography>
              </li>
            </ul>          
          </Paper>       
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
