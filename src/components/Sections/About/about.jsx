import React, { Component } from "react";
import { render } from "react-dom";

require("./about.scss");

export class About extends React.Component {
  render() {
    return (
      <section class="about" id="about">
        <div class="wrapper">
          <div class="wrapper-inner">
            <div class="about-info">
              <h1 class="visually-hidden">Online Zoo</h1>
              <h2 class="tag">Wild park</h2>
              <h3 class="tagline">Watch your favorite animal onl
                <span>
                  <span>ı</span>
                  <span class="dot">.</span>
                </span>
                ne
              </h3>
              <div class="button-holder">
                <button
                  class="btn btn__filled"
                  onclick="window.location='pages/map/map.html'"
                >
                  Choose zoo
                </button>
                <button
                  class="btn btn__hollow"
                  onclick="window.location='pages/zoos/panda.html'"
                >
                  Watch online
                </button>
              </div>
            </div>
            <div class="about-image">
              <img src="assets/images/panda.jpg" alt="Panda" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
