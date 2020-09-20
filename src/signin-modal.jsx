import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl } from '@material-ui/core';
import { FormGroup } from '@material-ui/core';
import { Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


export default ({classes, title}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return ( <>
      <Button className={classes.button} fullWidth  color="primary" variant="outlined" onClick={handleClickOpen}>{title}</Button> 
      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">        
        <Box textAlign="right">
          <CloseIcon color="primary" onClick={handleClose}/>
        </Box>
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>          
          <FormControl>
            <FormGroup>
              <TextField
                autoFocus                
                id="email"
                label="Почта"
                type="email"
                fullWidth
              />
              <TextField
                autoFocus                
                id="password"
                label="Пароль"
                type="password"
                fullWidth
              />
            </FormGroup>                
          </FormControl>          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Назад
          </Button>
          <Button onClick={handleClose} color="primary">
            Войти
          </Button>
        </DialogActions>
      </Dialog>      
    </>
  );
}
