import {TweetsModel} from '../models/TweetsModel';
import {validationResult} from 'express-validator';
import { generateMD5 } from '../utils/generateHash';
import {sendMail} from '../utils/sendMail';
import mongoose from 'mongoose';

const isValidId = mongoose.Types.ObjectId.isValid;

class TweetsController {
  async index(req, res){
    try {
      const tweets = await TweetsModel.find({}).exec();
      res.json({
        status: 'success',
        data: tweets
      })
    }
    catch(error){
      res.send({
        status: 'error',
        message: error
      })
    }
  }

  async create(req, res){
    console.log(req.body)
    try {
      const data = {              
        text: req.body.text,
        user: {
          fullName: req.body.fullName,
          userName: req.body.userName,
          avatarUrl: req.body.avatarUrl
        },
        postUrl: req.body.postUrl
      };

      const tweet = await TweetsModel.create(data);

      res.json({
        status: 'success',
        data: tweet
      })
    }
    catch(error) {
      res.send({
        status: 'error',
        message: error
      })
    }
  }
};

export const TweetsCtrl = new TweetsController();

