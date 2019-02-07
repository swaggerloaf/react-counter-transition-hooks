import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter.jsx';

require('./stylesheets/main.scss');

const ele = <h2>Ok</h2>;

ReactDOM.render(<Counter />, document.getElementById('mountNode'));
