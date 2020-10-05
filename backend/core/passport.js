import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import { generateMD5 } from '../utils/generateHash';
import UserModel from '../models/UserModel';

passport.use(
  new LocalStrategy(
    async (userName, password, done)=> {
      try {
        const user = await UserModel.findOne({$or: [{email: userName}, {userName}]}).exec();

        if(!user){
          console.log(`Yo2`)
          return done(null, false);
        }

        // if(user.password === generateMD5(password + Math.random().toString())){
        //   return done(null, user);
        // } else {
        //   return done(null, false)
        // }

        done(null, user);
  
      }
      catch (error){
        
        done(error, false)
      }
  }),
);

passport.serializeUser((user, done)=>{
  done(null, user._id)
});

passport.deserializeUser((id, done)=>{
  UserModel.findById(id, (err, user)=>{
    done(err, user);
  })
})

export {passport};
