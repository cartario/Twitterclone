import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { Button} from '@material-ui/core';
import { Hidden} from '@material-ui/core';
import { Typography} from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import UserIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import CreateIcon from '@material-ui/icons/CreateOutlined';
import AddTweet from './add-tweet';
import ModalBlock from './modal-block';

const SideMenu = ({classes}) => {
  const [isVisibleAddTweet, setVisibleAddTweet] = useState(false);

  const handleCloseModal = () => {
    setVisibleAddTweet(false);
  };

  const handleClickOpenModal = () => {
    setVisibleAddTweet(true);
  };

  return (
    <Paper style={{height: `100%`}} className={classes.paper}>            
      <ul className={classes.sideMenuList}>
        <li className={classes.sideMenuItem} style={{marginTop: 0}}>
          <IconButton style={{paddingTop: 0}}>
            <TwitterIcon className={classes.logo} color="primary"/>
          </IconButton>                
        </li>
        <li className={classes.sideMenuItem}>
          <IconButton>
            <NotificationsIcon className={classes.sideMenuIcon} />
          </IconButton>
          <Hidden smDown>
            <Typography className={classes.sideMenuItemLabel} >Notifications</Typography>
          </Hidden>  
          
        </li>
        <li className={classes.sideMenuItem}>
          <IconButton>
            <MessageIcon className={classes.sideMenuIcon} />
          </IconButton>
          <Hidden smDown>
            <Typography className={classes.sideMenuItemLabel} >Messages</Typography>
          </Hidden>
          
        </li>
        <li className={classes.sideMenuItem}>
          <IconButton>
            <BookmarkIcon className={classes.sideMenuIcon} />
          </IconButton>
          <Hidden smDown>
            <Typography className={classes.sideMenuItemLabel} >BookMarks</Typography>
          </Hidden>

        </li>
        <li className={classes.sideMenuItem}>
          <IconButton>
            <RepeatIcon className={classes.sideMenuIcon} />
          </IconButton> 
          <Hidden smDown>  
            <Typography className={classes.sideMenuItemLabel} >Repeats</Typography>
          </Hidden>
        </li>
        <li className={classes.sideMenuItem}>
          <IconButton>
            <UserIcon className={classes.sideMenuIcon} />
          </IconButton> 
          <Hidden smDown> 
            <Typography className={classes.sideMenuItemLabel} >User</Typography>
          </Hidden> 
        </li>
        <li className={classes.sideMenuItem}>
          <IconButton>
            <SearchIcon className={classes.sideMenuIcon} />
          </IconButton> 
          <Hidden smDown>  
            <Typography className={classes.sideMenuItemLabel} >Search</Typography>
          </Hidden>
        </li>
        <li className={classes.sideMenuItem}>          
          <Button className={classes.sideMenuButton} onClick={handleClickOpenModal} variant="contained" color="primary" fullWidth>
            <Hidden smDown>Твитнуть</Hidden> 
            <Hidden mdUp>          
              <CreateIcon className={classes.sideMenuIcon}/>            
            </Hidden> 
          </Button>            
        </li>
        <ModalBlock 
          isVisible={isVisibleAddTweet}
          handleClose={handleCloseModal}          
          modalTitle={``}>          
            <div style={{width: `500px`}} >
              <AddTweet classes={classes} maxRows={10}/>
            </div>
        </ModalBlock> 
      </ul>
      
    </Paper>
  );
};

export default SideMenu;
