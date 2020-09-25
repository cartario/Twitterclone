import React from 'react';
import './App.css';
import SignIn from './signin';
import Home from './home';
import {Switch, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from './store/ducks/tweets/actions';
import {Selector} from './store/ducks/tweets/selectors';
import {Operation} from './store/ducks/tweets/operations';


function App() { 
  const dispatch = useDispatch();
  const tweets = useSelector(Selector.getTweets);

  React.useEffect(()=>{
    dispatch(Operation.fetchTweets());
  }, [dispatch]);
  
  return (    
      <div className="App">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/">
            <Home 
              tweets = {tweets}
              sayHello={()=>dispatch(ActionCreator.hello())}
            />
          </Route>              
        </Switch>      
      </div>    
  );
}

export default App;
