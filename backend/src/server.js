const dotenv = require('dotenv').config();
import '../core/db';

import express from 'express';

import {UserCtrl} from '../controllers/UserController';
import {TweetsCtrl} from '../controllers/TweetsController';
import {registerValidations} from '../validations/register';
import {createTweetValidation} from '../validations/tweetValidation';
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

app.get('/tweets', TweetsCtrl.index);
app.post('/tweets', createTweetValidation, TweetsCtrl.create);
app.patch('/tweets/:id', createTweetValidation, TweetsCtrl.update);
app.get('/tweets/:id', TweetsCtrl.show);
app.delete('/tweets/:id', TweetsCtrl.remove);

app.get('/tags', (req,res)=>{
  res.send([
    {
      "name": "Санкт-Петербург",
      "count": "12345"
    },
    {
      "name": "Навальный",
      "count": "22222"
    },
    {
      "name": "СберКонф",
      "count": "3333"
    }
  ])
})

app.listen(process.env.PORT, () =>{
  console.log(`SERVER RUNNUNG`);
});
