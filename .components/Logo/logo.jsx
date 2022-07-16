import React from 'react';

require('./logo.scss');

export class Logo extends React.Component {
  render() {
    return (
        <div className="logo">
          <a href="#about"></a>
          {<img src={require("../../assets/logo.svg")} alt="logo" />}
        </div>
    );
  }
}