import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header/header';
import { Aside } from './components/Aside/aside';
import { About } from './components/Sections/About/about';
import { Howto } from './components/Sections/HowTo/howto';
import { FamousPets } from './components/Sections/Famous-pets/famous-pets';
import { Payment } from './components/Sections/Payment/payment';
import { Reviews } from './components/Sections/Reviews/reviews';
import { Zoogeography } from './components/Sections/Zoogeography/zoogeography';
import { Footer } from './components/Footer/footer';

require('./style.scss');

/* eslint max-classes-per-file: ["error", 2] */
class MainContent extends React.Component {
  render() {
    return (
      <div className="container">
        <Aside />
        <Header />
        <About />
        <Howto />
        <FamousPets />
        <Payment />
        <Reviews />
        <Zoogeography />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <MainContent />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.body);
