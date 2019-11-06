import React, { Component } from 'react';
import Pesquisar from './components/pesquisar';
import Main from './pages/videolist';
import './styles.scss';

const App = () => (
  <div className="App">
    <Pesquisar />
    <Main />
  </div>
);

export default App;
