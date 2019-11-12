import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteGeneratorContainer from './Components/QuoteGeneratorContainer';
import {Provider} from 'react-redux';
import store from './Components/Store'


function App() {
  return (
    <Provider store={store}>
      <QuoteGeneratorContainer/>

    </Provider>
  );
}

export default App;
