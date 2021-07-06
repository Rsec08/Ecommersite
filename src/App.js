
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './componets/Header/header.componet';

import HomePage from './pages/Homepage/Homepage.componet';
import ShopPage from './pages/Shop/shop.componet';

function App() {
  return (
    <div >
      <Switch>

      <Route exact path='/' component={HomePage}/> 
      <Route exact path='/shop' component={ShopPage}/> 
      </Switch>
    </div>
  );
}

export default App;
