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
import useHttp from './hooks/http.hook';

const initialState = {
  username: "",
  email: "",
  password: ""
};

const backendValidationMessage = (error)=>{
  if(typeof error!=='string' && !!error){    
  return error.map((item, i)=><span style={{color: 'red', fontSize: '10px'}} key={i}>{item.msg}</span>);
  }
return <span style={{color: 'red', fontSize: '10px'}} >{error}</span>
};

export default ({classes, title}) => {
  const {request, error, loading, clearError} = useHttp(); 
  const [data, setData] = React.useState(false); 
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState(initialState);  

  const handleRegister = async (e)=> {
    e.preventDefault();
    try {
      const response = await request('/auth/register', 'post', form); 
      setData(true);
      clearError();
      setOpen(false);    
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
    setOpen(false);
    setForm({...form, ...initialState});
    clearError();
  }; 

  return ( <>
      <Button className={classes.button} fullWidth  color="primary" variant="contained" onClick={handleClickOpen}>{title}</Button> 
      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">  
                  
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
                helperText=""
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
          <Button disabled={form.password.length<0} className={classes.signUpButton} fullWidth onClick={handleRegister} color="primary" variant="contained">
            Далее
          </Button>
        </DialogActions>        
        {error&&backendValidationMessage(error)}        
      </Dialog>         
    </>
  );
}
