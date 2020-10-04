import {UserModel} from '../models/UserModel';
import {validationResult} from 'express-validator';
import { generateMD5 } from '../utils/generateHash';
import {sendMail} from '../utils/sendMail';
import mongoose from 'mongoose';

const isValidId = mongoose.Types.ObjectId.isValid;

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

  async show(req, res) {
    try {
      const id = req.params.id;      
      
      if(!isValidId(id)) {
        res.status(401).send({
          status: 'user not found'
        })
        return;
      } 

      const user = await UserModel.findById(id).exec();

      res.json({
        status: 'success',
        message: user
      });
      
    }
    catch(error) {      
      res.status(500).send({
        status: 'error'
      });
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
        confirmed_hash: generateMD5(Math.random().toString()),
        password: generateMD5(req.body.password + Math.random().toString())
      };
      
      const user = await UserModel.create(data);
      
      res.json({
        status: 'success',
        data: user
      });

      sendMail({
        emailFrom: 'twitter@test.com', 
        emailTo: data.email, 
        subject: 'Подтверждение почты', 
        html: `Чтобы подтвердить почту <a href="http://localhost:${process.env.PORT || 8888}/users/verify?hash=${data.confirmed_hash}">перейдите по ссылке </a>`
      }, (err)=> {
        if(err){
          res.json({
            status: 'errorSendMail',
            message: JSON.stringify(err)
          })
        }
      });
    }

    catch(error){      
      res.send({
        status: 'error',
        message: JSON.stringify(error)
      })
    }
  }

  async verify(req, res) {
    
    try {
      const hash = req.query.hash;

      if(!hash){
        res.status(400).send();
      }

      const user = await UserModel.findOne({confirmed_hash: hash}).exec();

      if(user){        
        user.confirmed = true;
        user.save();

        res.json({
          status: 'success'        
        })

      } else {
        res.json({
          mmessage: 'Пользователь не найден'
        })
      }      
    }
    catch(error) {
      res.status(500).send();
    }
  }
};

export const UserCtrl = new UserController();
