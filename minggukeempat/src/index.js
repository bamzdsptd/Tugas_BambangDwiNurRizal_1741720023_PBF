import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StatefullComponent from './container/StatefullComponent';


// ReactDOM.render(<HelloComponent/>, document.getElementById('root'));
ReactDOM.render(<StatefullComponent/>, document.getElementById('root'));


// serviceWorker.unregister();
