import React, { Component } from 'react';
import { render } from 'react-dom';

require('./aside.scss');

export class Aside extends React.Component {
  render() {
    return (
      <aside class="aside">
        <div class="wrapper">
          <div class="sidebar">
            <div class="logo">
              <a href="#about"></a>
              <img src="assets/images/logo.svg" alt="logo" />
            </div>
            <ul class="social-icons">
              <li class="social-icons__item">
                <object data="assets/images/social-instagram.svg" type="image/svg+xml"></object>
                <a href="https://instagram.com" target="_blank"></a>
              </li>
              <li class="social-icons__item">
                <object data="assets/images/social-facebook.svg" type="image/svg+xml"></object>
                <a href="https://facebook.com" target="_blank"></a>
              </li>
              <li class="social-icons__item">
                <object data="assets/images/social-twitter.svg" type="image/svg+xml"></object>
                <a href="https://twitter.com" target="_blank"></a>
              </li>
            </ul>
            <button class="btn btn-round btn-up">
              <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.70711 0.292892C8.31658 -0.0976314   
          7.68342 -0.0976315 7.29289 0.292892L0.928933 
          6.65685C0.538409 7.04738 0.538408 7.68054 
          0.928933 8.07107C1.31946 8.46159 1.95262 
          8.46159 2.34315 8.07107L8 2.41421L13.6569 
          8.07107C14.0474 8.46159 14.6805 8.46159 
          15.0711 8.07107C15.4616 7.68054 15.4616 
          7.04738 15.0711 6.65686L8.70711 0.292892ZM9 
          19L9 1L7 1L7 19L9 19Z" fill="#0F0049" />
              </svg>
            </button>
          </div>
          <div class="remaining"></div>
        </div>
      </aside>
    );
  }
}

