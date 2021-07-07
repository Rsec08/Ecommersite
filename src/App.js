
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './componets/Header/header.componet';

import HomePage from './pages/Homepage/Homepage.componet';
import ShopPage from './pages/Shop/shop.componet';
import SignInAndSignUpPage from './pages/Sign-in-sign-up/Sign-in-sign-up';

function App() {
  return (
    <div >
      <Header/>
      <Switch>

      <Route exact path='/' component={HomePage}/> 
      <Route exact path='/shop' component={ShopPage}/> 
      <Route exact path='/signin' component={SignInAndSignUpPage}/> 
      </Switch>
    </div>
  );
}

export default App;
