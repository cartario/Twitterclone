import {UserModel} from '../models/UserModel';

class UserController {
  async index(req, res) {
    try {
      
      const users = await UserModel.find({}).exec();
      res.json({
        status: 'succes',
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

  // async create(req, res) {
  //   try {

  //   }
  //   catch(error){

  //   }
  // }
};

export const UserCtrl = new UserController();
