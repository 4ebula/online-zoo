import React from 'react';
import { paths } from './paths';
import User from './icons/user.svg';
import ArrowUp from './icons/arrow-up.svg';

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
    let classes = ['btn'];
    if (this.props.classes)
      classes = classes.concat(this.props.classes.map((e) => 'btn_' + e));
    return classes.join(' ');
  }

  setSvg() {
    switch (this.props.iconName) {
      case 'user': return User;        
        break;
      case 'arrowUp': return ArrowUp;
        break;
      default: break;
    }
  }

  setAction() {
    console.log('Hello');
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