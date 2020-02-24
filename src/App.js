import React from 'react';
import { Switch, Route } from 'react-router-dom';

// custom components imports
import Homepage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// css imports
import './App.css';


function App() {
  return (
    <div className="body-main">
      <Switch>
        <Route exact path='/' component={ Homepage }/>
        <Route path='/shop' component={ ShopPage }/>
      </Switch>
    </div>
  );
}

export default App;
