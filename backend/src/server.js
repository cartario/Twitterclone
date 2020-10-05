import dotenv from 'dotenv';
dotenv.config();
import '../core/db';

import express from 'express';

import {UserCtrl} from '../controllers/UserController';
import {registerValidations} from '../validations/register';
import {passport} from '../core/passport';

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.get('/users', UserCtrl.index);
app.get('/users/:id', UserCtrl.show);
app.post('/users', registerValidations, UserCtrl.create);
app.post('/auth/signin',
  passport.authenticate('local'),
  (req, res)=> {
    console.log(`hey`)
    res.json(req.user);    
  });
app.get('/users/verify', UserCtrl.verify);
// app.patch('/users/:id', UserCtrl.update);
// app.delete('/users/:id', UserCtrl.delete);

app.listen(process.env.PORT, () =>{
  console.log(`SERVER RUNNUNG`);
});

