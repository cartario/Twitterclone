import {createStore, compose, applyMiddleware} from 'redux';
import {rootReducer} from './reducers/root-reducer';

const store = createStore(rootReducer,
  compose(applyMiddleware(),  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
