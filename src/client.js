import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header/header';
import { Aside } from './components/Aside/aside';

require('./style.scss')

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <Aside/>
        <Header/>
      </div>
    );
  }
}

const app = document.getElementById('app');
render(<App/>, app);