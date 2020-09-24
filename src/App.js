import React from 'react';
import './App.css';
import SignIn from './signin';
import Home from './home';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from './store/actions';

function App({sayHello}) {  
  return (    
      <div className="App">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/">
            <Home 
              sayHello={sayHello}
            />
          </Route>              
        </Switch>      
      </div>
    
  );
}

const mapStateToProps = (state) => ({
  hello: state.reducerPage1,
});

const mapDispatchToProps = (dispatch) => ({
  sayHello: ()=>  {
    dispatch(ActionCreator.hello())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
