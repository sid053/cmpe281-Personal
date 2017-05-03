import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import { browserHistory } from 'react-router'
import Routes from './Route/Routes';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'node_modules/react-bootstrap/dist/react-bootstrap.css'
ReactDOM.render(
 <Routes history={browserHistory} />,
 document.getElementById('root')
);
