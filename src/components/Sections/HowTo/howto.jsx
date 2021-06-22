import React, { Component } from "react";

require('./howto.scss');

export class Howto extends React.Component {
  render() {
    return (
      <section class="howto" id="howto">
        <div class="wrapper">
          <div class="wrapper-inner">
            <div class="howto-image">
              <img src={require("../../../assets/images/lion.jpg")} alt="Lion"/>
            </div>
            <div class="howto-info">
              <h2>How Zoo online works</h2>
              <h3>Our service will give you an unforgettable experience of observing
                and interacting with animals remotely
              </h3>
              <p>Zoo Online is a web application with which you can watch live cages
                of different animals in nature reserves and zoos online and, if you
                wish, donate to the needs of the animal you like
              </p>
              <button class="btn btn__filled" onclick="window.location='pages/zoos/panda.html'">
                Try now</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
