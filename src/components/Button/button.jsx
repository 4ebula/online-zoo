import React from 'react';
import { paths } from './paths';
import User from './icons/user.svg';

require('./button.scss');
require('./icons/icon.scss');

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.link = props.link;
  }

  goTo() {
    window.location = this.link;
  }
  
  setClasses() {
    const classes = ['btn']
      .concat(this.props.classes.map((e) => 'btn_' + e)).join(' ');
    return classes;
  }

  setSvg() {
    switch (this.props.iconName) {
      case 'user': return User;        
        break;
      default: break;
    }
  }

  setAction() {
    return console.log('Hello');
  }

  render() {
    return (
      <button className={this.setClasses()} onClick={this.setAction}>
        {this.props.text !== undefined && <span>{this.props.text}</span>}
        <object data={this.setSvg()} type="image/svg+xml"></object>
      </button>
    );
  }
}