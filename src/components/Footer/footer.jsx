import React, { Component } from 'react';

require('./footer.scss');

export class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="wrapper">
          <div class="wrapper-inner">
            <div class="footer-main">
              <div class="footer-main_logos">
                <div>
                  <img src="assets/images/logo-big.svg" alt="" />
                  <a href="#about"></a>
                </div>
                <div class="side-logos">
                  <img src="assets/images/logo-yem.svg" alt="" title="Yem Digital" />
                  <span class="footer-logos-text">x</span>
                  <img src="assets/images/logo-RS.svg" alt="" title="RS School" />
                </div>
              </div>
              <div class="footer-main_nav">
                <h2>Navigation</h2>
                <nav class="footer-nav">
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
              <div class="footer-main_donate">
                <h2>Support of volunteers</h2>
                <p>You can thank the volunteers for theit work. For example,
                  caring for animals and sincere love for them.</p>
                <button class="btn btn-donate">Donate for volunteers</button>
                <ul class="social">
                  <li><a href="https://instagram.com">Instagram</a></li>
                  <li><a href="https://facebook.com">Facebook</a></li>
                  <li><a href="https://twitter.com">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div class="footer-row">
              <p>Copyright &copy;RSSchool and &copy;Yem Digital 2020 - 2021</p>
              <p>Designed by Vladislav Chernov</p>
            </div>
          </div>
        </div>
      </footer>);
  }
}