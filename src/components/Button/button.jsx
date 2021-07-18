import React from 'react';
import { paths } from './paths';

require('./button.scss');

export class Button extends React.Component {
  constructor(props) {
    super();
    this.link = props.link;
  }

  goTo() {
    window.location = this.link;
  }

  setClasses() {
    const classes = ['btn'].concat(this.props.classes).join(' ');
    return classes;
  }
  render() {
    return (
      <button className={this.setClasses()} onClick={() => this.goTo()}>
        <span>{this.props.text}</span>
        <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={paths[this.props.svgPath]} fill="#3888FF" />
        </svg>
      </button>
    );
  }
}