import React, {useState} from 'react';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducers/index';

import AppNavigator from "./navigation/AppNavigator";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const store = createStore(reducer, applyMiddleware(thunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'comfortaa': require('./assets/fonts/Comfortaa/Comfortaa-Regular.ttf'),
    'comfortaa-bold': require('./assets/fonts/Comfortaa/Comfortaa-Bold.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
        <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
            onError={err => console.log(err)}
        />
    );
  }

  return (
  <Provider store={store}>
    <AppNavigator/>
  </Provider>
  );
}


