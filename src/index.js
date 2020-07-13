import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navBar/navBar';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);
