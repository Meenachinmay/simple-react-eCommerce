import React from 'react';
import { Switch, Route } from 'react-router-dom';

// custom components imports
import Homepage from './pages/hompage/homepage.component';

// css imports
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
    </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Homepage }/>
        <Route path='/hats' component={ HatsPage }/>
      </Switch>
    </div>
  );
}

export default App;
