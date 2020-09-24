import React from 'react';
import './App.css';
import SignIn from './signin';
import Home from './home';
import {Switch, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from './store/actions';
import {Selector} from './store/selectors';


function App() { 
  const dispatch = useDispatch();
  const hello = useSelector((state)=>Selector.getHello(state));
  console.log(hello, new Date())
  return (    
      <div className="App">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/">
            <Home 
              sayHello={()=>dispatch(ActionCreator.hello())}
            />
          </Route>              
        </Switch>      
      </div>
    
  );
}

export default App;
