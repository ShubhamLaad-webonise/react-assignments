import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App.js';
require('bootstrap');
require('../css/sass.sass');

ReactDOM.render(<App />, document.getElementById('parent'));
