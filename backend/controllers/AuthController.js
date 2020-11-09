import {UserModel} from '../models/UserModel';
import {validationResult} from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { generateMD5 } from '../utils/generateHash';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

class AuthController {
  async register(req, res){
    
    try {  
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ status: 'error', errors: errors.array()});
        return;
      }

      const {username, email, password} = req.body; 
      const hashedPassword = await bcrypt.hash(password, 12);     
      const candidate = await UserModel.findOne({email});
      const isUniqUsername = !Boolean(await UserModel.findOne({userName: username}));

      if(candidate){
        return res.status(401).json({
          message: 'такой пользователь существует'
        });
      }

      if(!isUniqUsername){
        return res.status(401).json({
          message: 'такой никнейм существует'
        })
      }

      const data = {
        email,
        fullName: email,
        userName: username,
        confirmed_hash: generateMD5(email),
        password: hashedPassword,
      };
      
      const user = await UserModel.create(data);     
      
      res.send({
        userId: user._id,
        username: user.userName,
        email: user.email
      })
    }
    catch(err){
      res.send({
        status: 'error',
        message: err
      })
    }
  }

  async login(req, res){
    try {  
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ status: 'error', errors: errors.array()});
        return;
      }

      const {username, email, password} = req.body;
      const data = {
        email,
        fullName: email,
        userName: username,
        confirmed_hash: 'test hash',
        password
      }

      await UserModel.create(data);
      
      res.send({
        data: 'ok'
      })
    }
    catch(err){
      
      res.send({
        status: 'error',
        message: err
      })
    }
  }
};

export const AuthCtrl = new AuthController();
