import React from 'react';
import { ReactComponent as SVG } from '../../assets/logo.svg';

require('./logo.scss');

export class Logo extends React.Component {
  constructor() {
    super();
    const logoLink = require('../../assets/logo.svg');
    this.logo = <svg data={require('../../assets/logo.svg')} type="image/svg+xml"></svg>;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", logoLink, false);
    // Following line is just to be on the safe side;
    // not needed if your server delivers SVG with correct MIME type
    xhr.overrideMimeType("image/svg+xml");
    xhr.onload = () => {
      this.logo = xhr.responseXML.documentElement.outerHTML;
      console.log(this.logo);
      // You might also want to check for xhr.readyState/xhr.status here
      // document.getElementById("svgContainer")
      //   .appendChild(xhr.responseXML.documentElement);
    };
    xhr.send("");
  }
  render() {
    return (
      <div className="logo-container">
        <div className="logo">
          <a href="#about"></a>
          {<img src={require("../../assets/logo.svg")} alt="logo" />}
          {/* {this.logo} */}
        </div>
      </div>
    );
  }
}