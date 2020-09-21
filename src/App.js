import React from 'react';
import './App.css';
import SignIn from './signin';
import Home from './home';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component = {Home} />              
      </Switch>      
    </div>
  );
}

export default App;
