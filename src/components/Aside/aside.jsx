import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from '../Button/button';
import { Logo } from '../Logo/logo';

require('./aside.scss');

export class Aside extends React.Component {
  render() {
    return (
      <aside className="aside">
        <div className="wrapper">
          <div className="sidebar">
            <Logo />
            <ul className="social-icons">
              <li className="social-icons__item">
                <object data={require("../../assets/images/social-instagram.svg")} type="image/svg+xml"></object>
                <a href="https://instagram.com" target="_blank"></a>
              </li>
              <li className="social-icons__item">
                <object data={require("../../assets/images/social-facebook.svg")} type="image/svg+xml"></object>
                <a href="https://facebook.com" target="_blank"></a>
              </li>
              <li className="social-icons__item">
                <object data={require("../../assets/images/social-twitter.svg")} type="image/svg+xml"></object>
                <a href="https://twitter.com" target="_blank"></a>
              </li>
            </ul>
            <Button classes={['hollow', 'round', 'up']} iconName='arrowUp'/>
          </div>
          <div className="remaining"></div>
        </div>
      </aside>
    );
  }
}

