import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom';

import { Aside } from './components/Aside/aside';
import { Header } from './components/Header/header';
import { MainPage } from './pages/main/mainPage';
import { Panda } from './pages/zoos/panda';

import { Footer } from './components/Footer/footer';

require('./style.scss');

class Page extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="container">
            <Aside />
            <Header />
            <div>
            <Switch>
              <Route exact path="/zoos/panda"><Panda /></Route>
              <Route path="/" component={ MainPage } />
            </Switch>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

// const app = ReactDOM.render(<div className='app'></div>)
render(<Page />, document.body);
