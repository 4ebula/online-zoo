import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header/header';
import { Aside } from './components/Aside/aside';
import { About } from './components/Sections/About/about';
import { Howto } from './components/Sections/Howto/howto';
import { FamousPets } from './components/Sections/Famous-pets/famous-pets';

require('./style.scss')

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <Aside/>
        <Header/>
        <About/>
        <Howto/>
        <FamousPets/>
      </div>
    );
  }
}

const app = document.getElementById('app');
render(<App/>, app);