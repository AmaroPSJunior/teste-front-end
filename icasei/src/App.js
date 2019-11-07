import React, { Component } from 'react';
import Routes from './routes';

import Pesquisar from './components/pesquisar';
import Main from './pages/videolist';
import './styles.scss';

const App = () => (
  <div className="App">
    <Routes />
  </div>
);

export default App;
