import React from 'react';
import { Router, Route } from 'react-router'

import App from './App';
import Tenent1 from './Tenent1/Tenent1';
import Tenent2 from './Tenent2/Tenent2';
import Header from './Header';
import Login from './login';

const Routes = (props) => (
  <Router {...props}>
     <Route path="/" component={Login}/>
    <Route path="/App" component={App} />
    <Route path="/Tenent1" component={Tenent1} />
    <Route path="/Tenent2" component={Tenent2} />
    <Route path="/Header" component={Header} />

  </Router>
);

export default Routes;
