import React from 'react';
import Tweet from './tweet';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InputBase from '@material-ui/core/InputBase';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import UserIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import grey from '@material-ui/core/colors/grey';

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

    '&:hover': {
      color: theme.palette.primary.main,
    },

    '&:hover svg path': {
      fill: theme.palette.primary.main,
    }
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
  tweetsWrapper: {
    height: `100%`,
    textAlign: `left`,
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    padding: `10px`,
    borderRight: 0,
    borderLeft: 0,
    borderTop: 0,
  },
  tweetsList: {
    margin: 0,
    padding: 0,
    listStyle: `none`,
  },
  tweetsItem: {
    padding: 10,
    '&:hover': {
      backgroundColor: `rgb(248,250,200)`
    },
    cursor: `pointer`,
  },
  tweetsUser: {
    fontSize: 14
  },
  tweetsUserName: {
    color: grey[500],
  },
  tweetIconButton: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  tweetIcon: {
    fontSize: 18,         
  },
  tweetControls: {
    display: `flex`,
    justifyContent: `space-between`,
    width: `80%`,
    marginLeft: -13,
  },
  tweetAvatar: {
    width: 40,
    height: 40,
  }
}));

const text = `The following npm package, @material-ui/icons, includes the 1,100+ official Material icons converted to SvgIcon components`;

const users = [
  {
    _id: 'ddsdsds',
    name: 'Natali',
    email: '@natali',
    text: '',
    avatarUrl: `https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80`
  },
  {
    _id: `jhjhjkhk`,
    name: 'Natali',
    email: '@natali',
    text: '',
    avatarUrl: `https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
  },
  {
    _id: `kokoooo`,
    name: 'Natali',
    email: '@natali',
    text: '',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  },
];

const BootstrapInput = withStyles((theme) => ({
  
  input: {
    borderRadius: 40,
    position: 'relative',
    backgroundColor: `#ced4da`,
    border: '1px solid #ced4da',
    fontSize: 16,    
    padding: '10px 12px',    
  },
}))(InputBase);

const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>        
        <Grid  item xs={3}>
          <Paper style={{height: `100vh`}} className={classes.paper}>            
            <ul className={classes.sideMenuList}>
              <li className={classes.sideMenuItem}>
                <IconButton style={{paddingTop: 0}}>
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
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">
                Главная                
              </Typography>
              <form style={{height: `100px`}}>
              </form>
            </Paper>            
            <ul className={classes.tweetsList}>
              {users.map((user)=>
                <Tweet key={user._id} classes={classes} text={text} user={user}/>
              )}
              
              
                      
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          {/* <Paper className={classes.paper}> */}
            <BootstrapInput              
              label="Поиск"              
              fullWidth
              placeholder="Поиск по твиттеру"
              
            />
          {/* </Paper> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
