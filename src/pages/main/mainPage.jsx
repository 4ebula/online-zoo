import React, { Component } from 'react';

import { About } from '../../components/Sections/About/about';
import { Howto } from '../../components/Sections/HowTo/howto';
import { FamousPets } from '../../components/Sections/Famous-pets/famous-pets';
import { Payment } from '../../components/Sections/Payment/payment';
import { Reviews } from '../../components/Sections/Reviews/reviews';
import { Zoogeography } from '../../components/Sections/Zoogeography/zoogeography';

export class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <About />
        <Howto />
        <FamousPets />
        <Payment />
        <Reviews />
        <Zoogeography />
      </React.Fragment>
    );
  }
}
