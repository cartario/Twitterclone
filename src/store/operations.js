import {ActionCreator} from './actions';

export const Operation = {
  load: () => (dispatch)=> {    
    return fetch("https://reqres.in/api/users?page=2")
    .then((res)=>{      
      dispatch(ActionCreator.hello());
    })
    .catch((err)=>{
      throw err;
    });
  },
};
