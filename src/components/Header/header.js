import React, { Component } from 'react';
import { render } from 'react-dom';

require('./header.scss');

export class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <div class="wrapper">
          <div class="header-main">
            <div class="logo-container">
              <div class="logo">
                <a href="#about"></a>
                <img src="assets/images/logo.svg" alt="logo"/>
              </div>
            </div>
            <nav>
              <ul>
                <li class="active"><a href="">About</a></li>
                <li><a href="pages/map/map.html">Map</a></li>
                <li><a href="pages/zoos/panda.html">Zoos</a></li>
                <li><a href="pages/404/404.html">Contact us</a></li>
                <li><a href="https://www.figma.com/file/74wXlorl9mZQP0uhqDg83j/Online-Zoo">
                    Design</a></li>
              </ul>
            </nav>
            <div class="login">
              <button class="btn btn-login">
                <object data="assets/images/icon-login.svg" type="image/svg+xml"></object>
              </button>
            </div>
            <div class="burger"><img src="assets/images/icons/icon-burger.svg" alt=""/></div>
          </div>
        </div>
      </header>
    );
  }
}
