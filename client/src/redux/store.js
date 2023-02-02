import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import productReducer from './productRedux';
import cartReducer from './cartRedux';

const subreducers = {
  products: productReducer,
  cart: cartReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
