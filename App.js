import React from 'react';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducers/index';
import AppNavigator from "./navigation/AppNavigator";

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
  <Provider store={store}>
    <AppNavigator/>
  </Provider>
  );
}


