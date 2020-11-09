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
import useHttp from './hooks/http.hook'

export default ({classes, title}) => {
  const {request, error, loading} = useHttp(); 
  const [data, setData] = React.useState(false); 
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: ""
  });

  const handleRegister = async (e)=> {
    e.preventDefault();
    try {
      const response = await request('/auth/register', 'post', form); 
      setData(true);    
    }
    catch(err){}      
  }
  
  const handleChange = (e) => {
    const target = e.target.value;
    const name = e.target.id;

    setForm({
      ...form , [name]: target
    });   
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if(error){
      setOpen(false);
    }    
  }; 

  return ( <>
      <Button className={classes.button} fullWidth  color="primary" variant="contained" onClick={handleClickOpen}>{title}</Button> 
      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">  
      <form onSubmit={handleRegister}>            
        <Box textAlign="right">
          <CloseIcon color="primary" onClick={handleClose}/>
        </Box>
        <DialogTitle id="form-dialog-title">Создайте учетную запись</DialogTitle>        
        <DialogContent>    
          <FormControl >
            <FormGroup >
              <TextField
                autoFocus                
                id="username"
                label="Имя"
                type="name"
                fullWidth
                onChange={handleChange}
                value={form.username}
                error={!!error}
              />
              <TextField
                autoFocus                
                id="email"
                label="Почта"
                type="email"
                fullWidth
                onChange={handleChange}
                value={form.email}
                error={!!error}
              />
              <TextField
                autoFocus                
                id="password"
                label="Пароль"
                type="password"
                fullWidth
                onChange={handleChange}
                value={form.password}
                error={!!error}
              />
            </FormGroup>                
          </FormControl>          
        </DialogContent>
        <DialogActions>          
          <Button disabled={form.password.length<6} type="submit" className={classes.signUpButton} fullWidth onClick={handleClose} color="primary" variant="contained">
            Далее
          </Button>
        </DialogActions>
        </form>
        {error&&JSON.stringify(error)}        
      </Dialog>         
    </>
  );
}
