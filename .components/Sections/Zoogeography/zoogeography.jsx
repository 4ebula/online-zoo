import React, { Component } from 'react';
import { Card } from '../../Card/card'

require('./zoogeography.scss');


export class Zoogeography extends React.Component {
  render() {
    return (
      <section className="zoogeography" id="zoogeography">
        <div className="wrapper">
          <div className="wrapper-inner_one-side">
            <div className="zoogeography-container">
              <h2>Zoogeography</h2>
              <div className="zoogeography-card__container">
                <Card name='eagle'/>
                <Card name='gorilla'/>
                <Card name='alligator' active/>
                <Card name='panda'/>
              </div>
            </div>
            <div className="zoogeography-map-container">
              <div className="zoogeography-map">
                <object className="marker-eagle marker-active" data={require("../../../assets/icons/marker-eagle.svg")}
                  type="image/svg+xml" data-animal="eagle"></object>
                <object className="marker-panda" data={require("../../../assets/icons/marker-panda.svg")} type="image/svg+xml"
                  data-animal="panda"></object>
                <object className="marker-gorilla" data={require("../../../assets/icons/marker-gorilla.svg")} type="image/svg+xml"
                  data-animal="gorilla"></object>
                <object className="marker-alligator" data={require("../../../assets/icons/marker-alligator.svg")} type="image/svg+xml"
                  data-animal="aligator"></object>
              </div>
            </div>
          </div>
        </div>
      </section>);
  }
}