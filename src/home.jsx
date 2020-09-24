import React from 'react';
import SideMenu from './side-menu';
import AddTweet from './add-tweet';
import Tweet from './tweet';
import { makeStyles,} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container} from '@material-ui/core';
import { Typography, IconButton} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import grey from '@material-ui/core/colors/grey';
import SearchIcon from '@material-ui/icons/Search';
import SideHomeRight from './side-home-right';

const useStyles = makeStyles((theme) => ({
  paper: {    
    textAlign: `left`,
  },
  sideMenuList: {
    position: `sticky`,
    top: 0,
    margin: 0,
    padding: 0,
    listStyle: `none`,
  },
  sideMenuItem: {
    display: `flex`,
    alignItems: `center`,
    margin: `10px 0`,
    cursor: `pointer`,
    transition: `all 0.2s ease`,

    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: `rgba(29, 161, 242, 0.1)`,
      borderRadius: 30,
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
  sideMenuButton: {
    margin: `5px auto`,
    boxSizing: `border-box`,
    borderRadius: `25px`,
    color: `white`
  },
  logo: {    
    fontSize: 32,
  },
  searchFieldWrap: {
    display: `flex`,
    position: `sticky`,
    top: 0,
    zIndex: 1,  
    backgroundColor: `#ced4da`,
    borderRadius: 40,    
  },
  searchField: {    
    padding: `10px 15px`,       
    fontSize: 16,    
  },
  tweetsWrapper: {
    height: `100%`,
    textAlign: `left`,
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    position: `sticky`,
    top: 0,
    zIndex: 1,
    padding: `10px`,
    borderRight: 0,
    borderLeft: 0,
    borderTop: 0,
  },
  tweetsList: {
    margin: 0,
    padding: 0,
    listStyle: `none`,
    borderTop: `10px solid rgba(0,0,0,0.1)`
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
  },
  addTweetTextarea: {
    width: `100%`,
    fontFamily: `inherit`,
    fontSize: 16,
    border: 0,
    outline: 'none',
    resize: `none`,
  },
  addTweetControls: {
    display: `flex`, 
    justifyContent: `space-between`,
    marginTop: 30,
  },
  addTweetControlsLeftSide: {
    display: `flex`,
    alignItems: `center`,
  },
  addTweetControlsRightSide: {
    display: `flex`,
    alignItems: `center`,
  },
  addTweetControlsCircularProgress: {
    position: `relative`,
    margin: `0 10px`,
    display: `flex`, 
    alignItems: `center`,
  },
  addTweetButton: {
    margin: `0 10px`,
    borderRadius: 30,
    color: `white`,
  },
}));

const text = `The following npm package, @material-ui/icons, includes the 1,100+ official Material icons converted to SvgIcon components`;

const users = [
  {
    _id: 'ddsdsds',
    name: 'Natali',
    email: '@natali',
    text: '',
    avatarUrl: `https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80`,
    date: `1 hour ago`,
  },
  {
    _id: `jhjhjkhk`,
    name: 'Natali',
    email: '@natali',
    text: '',
    avatarUrl: `https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
  },
  {
    _id: `kowkoooo`,
    name: 'Natali',
    email: '@natali',
    text: '',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  },
  {
    _id: `kokooowo`,
    name: 'Natali',
    email: '@natali',
    text: '',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  },
  {
    _id: `kowskoooo`,
    name: 'Natali',
    email: '@natali',
    text: '',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  },
  {
    _id: `kokwoooo`,
    name: 'Natali',
    email: '@natali',
    text: '',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  },
  {
    _id: `kokowooo`,
    name: 'Natali',
    email: '@natali',
    text: '',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  },
];



const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">      
      <Grid container spacing={3}>        
        <Grid  item xs={2} sm={2}>
          <SideMenu classes={classes}/>                
        </Grid>
        <Grid item xs={5} sm={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">
                Главная                
              </Typography>
              <AddTweet classes={classes}/>
            </Paper>            
            <ul className={classes.tweetsList}>
              {users.map((user)=>
                <Tweet key={user._id} classes={classes} text={text} user={user}/>
              )}         
              
                      
            </ul>
            
          </Paper>
        </Grid>
        
        <Grid item xs={5} sm={4}>        
          <div className={classes.searchFieldWrap}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <InputBase className={classes.searchField}              
              variant="outlined"           
              fullWidth
              placeholder="Поиск по твиттеру"
            />            
          </div>
          <div>
            <SideHomeRight/>
          </div>          
        </Grid>
        
      </Grid>
    </Container>
  );
};

export default Home;
