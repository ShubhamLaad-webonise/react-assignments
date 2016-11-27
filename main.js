import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App appProp={[1, 2, 3]} />, document.getElementById('parent'));
