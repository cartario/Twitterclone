import express from 'express';
import '../core/db';
import {UserCtrl} from '../controllers/UserController';

const app = express();
app.use(express.json());

const PORT = 8888;

app.get('/users', UserCtrl.index);

app.listen(PORT, () =>{
  console.log(`SERVER RUNNUNG`);
});
