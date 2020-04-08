import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StatefullComponent from './container/StatefullComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import BlogPost from "./container/BlogPost/BlogPost";


// ReactDOM.render(<HelloComponent/>, document.getElementById('root'));
ReactDOM.render(<BlogPost/>, document.getElementById('content'));


 serviceWorker.unregister();
