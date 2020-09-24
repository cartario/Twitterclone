import React from 'react';
import {makeStyles, List, ListItem, ListItemText, Divider, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  actualNews: {
    marginTop: 10,
    borderRadius: `10px`,
    backgroundColor: `#ced4da`,
  },
  actualNewsTitle: {
    
  },
}));

const themeNews = ['Санкт-Петербург','#коронавирус','Беларусь'];
const tweetsCount = [3331, 234, 5767];

const SideHomeRight = () => {
  const classes = useStyles();
  return (
    <List className={classes.actualNews}>
      <ListItem>
        <Typography className={classes.actualNewsTitle} vatiant="h2"><b>Актуальные темы</b></Typography>
      </ListItem>
      <Divider/>
      <ListItem button>
        <ListItemText primary={themeNews[0]} secondary={`Твитов: ${tweetsCount[0]}`}/>
      </ListItem>
      <Divider/>
      <ListItem button> 
        <ListItemText primary={themeNews[1]} secondary={`Твитов: ${tweetsCount[1]}`}/>
      </ListItem>
      <Divider/>
      <ListItem button>
        <ListItemText primary={themeNews[2]} secondary={`Твитов: ${tweetsCount[2]}`}/>
      </ListItem>
      <Divider/>
    </List>
  );
};

export default SideHomeRight;
