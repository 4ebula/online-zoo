import React, { Component } from "react";

require('./about.scss');

export class About extends React.Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="wrapper">
          <div className="wrapper-inner">
            <div className="about-info">
              <h1 className="visually-hidden">Online Zoo</h1>
              <h2 className="tag">Wild park</h2>
              <h3 className="tagline">Watch your favorite animal onl
                <span>
                  <span>ı</span>
                  <span className="dot">.</span>
                </span>
                ne
              </h3>
              <div className="button-holder">
                <button
                  className="btn btn__filled"
                  onClick="window.location='pages/map/map.html'"
                >
                  Choose zoo
                </button>
                <button
                  className="btn btn__hollow"
                  onClick="window.location='pages/zoos/panda.html'"
                >
                  Watch online
                </button>
              </div>
            </div>
            <div className="about-image">
              <img src={require("../../../assets/images/panda.jpg")} alt="Panda" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
