import React from 'react';
import {Provider} from 'react-redux';
import App from './app';

const Root = ({ store1 }) => (
    <Provider store={ store1 }>
      <App />
    </Provider>
  );
  
  export default Root;
