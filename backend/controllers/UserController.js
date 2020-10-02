import {UserModel} from '../models/UserModel';
import {validationResult} from 'express-validator';
import { generateMD5 } from '../utils/generateHash';

class UserController {
  async index(req, res) {
    try {
      const users = await UserModel.find({}).exec();
      res.json({
        status: 'success',
        data: users
      });
    }
    catch (error){
      res.send({
        status: 'error',
        message: JSON.stringify(error)
      })
    }
  }

  async create(req, res) {    
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ status: 'error', errors: errors.array()});
        return;
      }

      const data = {
        email: req.body.email,
        fullName: req.body.fullName,
        userName: req.body.userName,
        confirmed_hash: generateMD5(process.env.SECRET_KEY || Math.random().toString()),
        password: req.body.password
      };

      const user = await UserModel.create(data);

      res.json({
        status: 'success',
        data: user
      })
    }
    catch(error){
      console.log({
        message: JSON.stringify(process.env.SECRET_KEY),
        data: req.body
      })
      res.send({
        status: 'error',
        message: JSON.stringify(error)
      })
    }
  }
};

export const UserCtrl = new UserController();
