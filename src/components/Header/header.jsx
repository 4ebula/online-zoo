import { Button } from '../Button/button';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Logo } from '../Logo/logo';

require('./header.scss');

export class Header extends React.Component {

  render() {
    const activeClass = (route) => { 
      console.log(route, location.pathname);
      return location.pathname === route ? "active" : null;
    };
    return (
      <header className="header">
        <div className="wrapper">
          <div className="header-main">
            <Logo />
            <nav>
              <ul onClick={(e) => console.log(e.target)}>
                <li className={activeClass('/')}><Link to='/' >About</Link></li>
                <li><a href="pages/map/map.html">Map</a></li>
                <li className={activeClass('/zoos/panda/')}><Link to='/zoos/panda' >Zoos</Link></li>
                <li><Link to="/404">Contact us</Link></li>
                <li><a href="https://www.figma.com/file/74wXlorl9mZQP0uhqDg83j/Online-Zoo">
                    Design</a></li>
              </ul>
            </nav>
            <div className="login">
              <Button classes = {['filled', 'round', 'login']} iconName='user'/>
            </div>
            <div className="burger"><img src={require("../../assets/images/icons/icon-burger.svg")} alt=""/></div>
          </div>
        </div>
      </header>
    );
  }
}
