import express from 'express';
import '../core/db';
import {UserCtrl} from '../controllers/UserController';

const app = express();
app.use(express.json());

const PORT = 8888;

app.get('/users', UserCtrl.index);
app.post('/users', UserCtrl.create);
// app.patch('/users/:id', UserCtrl.update);
// app.delete('/users/:id', UserCtrl.delete);

app.listen(PORT, () =>{
  console.log(`SERVER RUNNUNG`);
});
