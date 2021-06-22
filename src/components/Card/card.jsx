import React from 'react';
import { Button } from '../Button/button';
import { descriptions } from './descriptions';

require('./card.scss');

export class Card extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: props.active ? true: false,
    }
    this.name = props.name;
  } 
  render() {
    return (
      <div className={this.state.active ? "zoogeography-card card-active" : "zoogeography-card"} data-animal={this.name}>
        <div className="zoogeography-card__image">
          <img src={require(`../../assets/images/card-${this.name}.jpg`)} alt={this.name} style={{ objectPosition: [0, 0] }} />
        </div>
        <h3>{this.name}</h3>
        <p>{descriptions[this.name]}</p>
        <Button text='Watch now' link={`pages/zoos/${this.name}.html`} svgPath='arrowGoto' />
      </div>
    );
  }
}