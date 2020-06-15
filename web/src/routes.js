import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LoginPage from './components/LoginPage';
import ConnectionPage from './components/ConnectionPage';

const Routes =()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route component={LoginPage} exact path='/'/>
        <Route component={ConnectionPage} exact path='/connect/:userId'/>
        <div path='/'><h1>Opa! Página não encontrada.</h1></div>
      </Switch>
    </BrowserRouter>
  )
};
export default Routes