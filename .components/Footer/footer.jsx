import React, { Component } from 'react';

require('./footer.scss');

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <div className="wrapper-inner">
            <div className="footer-main">
              <div className="footer-main_logos">
                <div>
                  <img src={require("../../assets/logo.svg")} alt="" />
                  <a href="#about"></a>
                </div>
                <div className="side-logos">
                  <img src={require("../../assets/images/logo-yem.svg")} alt="" title="Yem Digital" />
                  <span className="footer-logos-text">x</span>
                  <img src={require("../../assets/images/logo-RS.svg")} alt="" title="RS School" />
                </div>
              </div>
              <div className="footer-main_nav">
                <h2>Navigation</h2>
                <nav className="footer-nav">
                  <ul>
                    <li><a href="#about">Watch online</a></li>
                    <li><a href="#howto">How it works</a></li>
                    <li><a href="#famous-pets">Famous pets</a></li>
                    <li><a href="#payment">Pay &amp; feed</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#zoogeography">Zoogeography</a></li>
                  </ul>
                </nav>
              </div>
              <div className="footer-main_donate">
                <h2>Support of volunteers</h2>
                <p>You can thank the volunteers for theit work. For example,
                  caring for animals and sincere love for them.</p>
                <button className="btn btn-donate">Donate for volunteers</button>
                <ul className="social">
                  <li><a href="https://instagram.com">Instagram</a></li>
                  <li><a href="https://facebook.com">Facebook</a></li>
                  <li><a href="https://twitter.com">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-row">
              <p>Copyright &copy;RSSchool and &copy;Yem Digital 2020 - 2021</p>
              <p>Designed by Vladislav Chernov</p>
            </div>
          </div>
        </div>
      </footer>);
  }
}