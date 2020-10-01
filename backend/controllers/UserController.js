import {UserModel} from '../models/UserModel';

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
      const data = {
        email: req.body.email,
        fullName: req.body.fullName,
        userName: req.body.userName,
        confirmed_hash: req.body.confirmed_hash,
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
        message: JSON.stringify(error),
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
