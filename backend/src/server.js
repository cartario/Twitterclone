import dotenv from 'dotenv';
dotenv.config();
import '../core/db';

import express from 'express';

import {UserCtrl} from '../controllers/UserController';
import {registerValidations} from '../validations/register';

const app = express();

app.use(express.json());

app.get('/users', UserCtrl.index);
app.get('/users/:id', UserCtrl.show);
app.post('/users', registerValidations, UserCtrl.create);
app.get('/users/verify', UserCtrl.verify);
// app.patch('/users/:id', UserCtrl.update);
// app.delete('/users/:id', UserCtrl.delete);

app.listen(process.env.PORT, () =>{
  console.log(`SERVER RUNNUNG`);
});

