import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// custom components imports
import App from './App';

// all the css imports
import './index.css';

ReactDOM.render(
    
    <BrowserRouter>
        <App />
    </BrowserRouter>, 

document.getElementById('root')
);