import React, {useEffect} from 'react';
import {makeStyles, List, ListItem, ListItemText, Divider, Typography, Avatar, IconButton} from '@material-ui/core';
import AddUserIcon from '@material-ui/icons/PersonAddOutlined';
import {useDispatch, useSelector} from 'react-redux';
import {Operation} from './store/ducks/tags/operations';
import {Selector} from './store/ducks/tags/selectors';
import Preloader from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme)=>({
  rightSideList: {
    marginTop: 10,
    borderRadius: `10px`,
    backgroundColor: `#ced4da`,
  },
  rightSideListTitle: {
    
  },
  rightSideItemAvatar: {
    marginRight: 20,
  },
}));

const user = {
  name: [`alex`,`naasha`,`dimon`],
  mail: [`@alwx`,`@naasha`,`@dimon`],
};

const SideHomeRight = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tags = useSelector(Selector.getTags);
  const isLoaded = useSelector(Selector.getIsLoaded);
  
  useEffect(()=>{
    dispatch(Operation.fetchTags());
  },[dispatch]);

  return (<>
    {!isLoaded ? <Preloader />:
    <List className={classes.rightSideList}>
      <ListItem>
        <Typography className={classes.rightSideListTitle} vatiant="h2"><b>Актуальные темы</b></Typography>
      </ListItem>
      <Divider component="li"/>
      {tags.map((tag)=> 
      <React.Fragment key={tag.name}>
        <ListItem button>        
          <ListItemText primary={tag.name} secondary={`Твитов: ${tag.count}`}/>
        </ListItem>
        <Divider component="li"/>
      </React.Fragment>)}
      
    </List>}
    <List className={classes.rightSideList}>
      <ListItem>
        <Typography className={classes.rightSideListTitle} vatiant="h2"><b>Кого читать</b></Typography>
      </ListItem>
      <Divider component="li"/>
      <ListItem button>
        <Avatar className={classes.rightSideItemAvatar} alt="Remy Sharp" src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80"/>
        <ListItemText primary={user.name[0]} secondary={user.mail[0]}/>
        <IconButton>
          <AddUserIcon color="primary"/>
        </IconButton>
      </ListItem>
      <Divider component="li"/>
      <ListItem button> 
        <Avatar className={classes.rightSideItemAvatar} alt="Remy Sharp" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"/>
        <ListItemText primary={user.name[1]} secondary={user.mail[1]}/>
        <IconButton>
          <AddUserIcon color="primary"/>
        </IconButton>
      </ListItem>
      <Divider component="li"/>
      <ListItem button>
        <Avatar className={classes.rightSideItemAvatar} alt="Remy Sharp" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1856&q=80"/>
        <ListItemText primary={user.name[2]} secondary={user.mail[2]}/>
        <IconButton>
          <AddUserIcon color="primary"/>
        </IconButton>        
      </ListItem>
      <Divider component="li"/>
    </List>
    </>
  );
};

export default SideHomeRight;
