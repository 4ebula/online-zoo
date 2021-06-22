import React, { Component } from 'react';

require('./header.scss');

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <div className="header-main">
            <div className="logo-container">
              <div className="logo">
                <a href="#about"></a>
                <img src={require("../../assets/images/logo.svg")} alt="logo"/>
              </div>
            </div>
            <nav>
              <ul>
                <li className="active"><a href="">About</a></li>
                <li><a href="pages/map/map.html">Map</a></li>
                <li><a href="pages/zoos/panda.html">Zoos</a></li>
                <li><a href="pages/404/404.html">Contact us</a></li>
                <li><a href="https://www.figma.com/file/74wXlorl9mZQP0uhqDg83j/Online-Zoo">
                    Design</a></li>
              </ul>
            </nav>
            <div className="login">
              <button className="btn btn-login">
                <object data={require("../../assets/images/icon-login.svg")} type="image/svg+xml"></object>
              </button>
            </div>
            <div className="burger"><img src={require("../../assets/images/icons/icon-burger.svg")} alt=""/></div>
          </div>
        </div>
      </header>
    );
  }
}
