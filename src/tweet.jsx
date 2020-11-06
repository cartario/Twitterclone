import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import Avatar from '@material-ui/core/Avatar';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SendIcon from '@material-ui/icons/SendOutlined';
import { Link } from 'react-router-dom';
import { formatDate } from '../src/utils';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';

const options = [
  <>
    <EditIcon />
    &nbsp;Редактировать
  </>,
  <>
    <DeleteOutlineIcon />
    &nbsp;Удалить
  </>,
];

const ITEM_HEIGHT = 48;

const Tweet = ({ classes, text, user, id, date }) => {  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    event.stopPropagation();
    event.preventDefault();
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    event.stopPropagation();
    event.preventDefault();

    const target = event.currentTarget.childNodes[1].data.trim();
    
    //сделать operation
    if(target==='Удалить'){
      axios.delete(`/tweets/${id}`)
    }
  };

  if (!user) {
    return null;
  }
  return (
    <li className={classes.tweetsItem}>
      <Link to={`home/tweet/${id}`}>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Avatar
              className={classes.tweetAvatar}
              alt={`Аватарка пользователя ${user.fullName}`}
              src={user.avatarUrl}
            />
          </Grid>
          <Grid item xs={11}>
            <div className={classes.tweetsUserWrapper}>
              <Typography className={classes.tweetsUser}>
                <b>{user.fullName}</b>
                <span className={classes.tweetsUserName}>{user.userName}</span>
                <span className={classes.tweetsUserName}>-</span>
                <span className={classes.tweetsUserName}>{user.userName}</span>
                <span className={classes.tweetsUserName}>-</span>
                <span className={classes.tweetsUserName}>{formatDate(date)} назад</span>
              </Typography>
              <div>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: '20ch',
                    },
                  }}
                >
                  {options.map((option, i) => (
                    <MenuItem
                      className={classes.tweetsUserIcon}
                      key={option + i}
                      selected={option === 'Редактировать'}
                      onClick={handleClose}                      
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
            <Typography variant="body1">{text}</Typography>
            <div className={classes.tweetControls}>
              <IconButton className={classes.tweetIconButton}>
                <CommentIcon className={classes.tweetIcon} />
                <span style={{ fontSize: 14 }}>1</span>
              </IconButton>
              <IconButton className={classes.tweetIconButton}>
                <RepeatIcon className={classes.tweetIcon} />
              </IconButton>
              <IconButton className={classes.tweetIconButton}>
                <LikeIcon className={classes.tweetIcon} />
              </IconButton>
              <IconButton className={classes.tweetIconButton}>
                <SendIcon className={classes.tweetIcon} />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Link>
    </li>
  );
};

export default Tweet;
