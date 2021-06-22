import React, { Component } from "react";

require('./famous-pets.scss');

export class FamousPets extends React.Component {
  render() {
    return (
      <section className="famous-pets" id="famous-pets">
        <div className="wrapper">
          <div className="wrapper-inner">
            <div className="famous-pets-info">
              <h2>Famous pets</h2>
              <h3>You can choose any animal you&nbsp;like</h3>
              <div className="direction-buttons">
                <button className="btn-round left">
                  <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292892 8.7071C-0.0976315 8.31658 -0.0976314 7.68342
                      0.292893 7.29289L6.65686 0.928931C7.04738 0.538406 7.68054 0.538406 8.07107 
                      0.928931C8.46159 1.31946 8.46159 1.95262 8.07107 2.34314L2.41421 8L8.07107 
                      13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 
                      15.4616 6.65685 15.0711L0.292892 8.7071ZM29 9L1 9L1 7L29 7L29 9Z" fill="#FCFCFC" />
                  </svg>
                </button>
                <button className="btn-round right">
                  <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.7071 8.7071C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 
                      0.928931C21.9526 0.538406 21.3195 0.538406 20.9289 0.928931C20.5384 1.31946 
                      20.5384 1.95262 20.9289 2.34314L26.5858 8L20.9289 13.6569C20.5384 14.0474 
                      20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 
                      8.7071ZM6.3452e-08 9L28 9L28 7L-6.3452e-08 7L6.3452e-08 9Z" fill="#FCFCFC" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="slider">
              <div className="slider-grid">
                <div className="slider-card" data-column="1">
                  <img src={require("../../../assets/images/animals/little-panda.jpg")} alt="Little panda"/>
                  <div className="slider-card__text">
                    <div className="slider-card__text-plus"><span>+</span></div>
                    <p className="slider-card__text-geo">China, East Asia</p>
                    <p className="slider-card__text-descrip">Little panda</p>
                    <p className="slider-card__text-follow">Follow</p>
                  </div>
                </div>
                <div className="slider-card" data-column="1">
                  <img src={require("../../../assets/images/animals/panda.jpg")} alt="Panda"/>
                  <div className="slider-card__text">
                    <div className="slider-card__text-plus"><span>+</span></div>
                    <p className="slider-card__text-geo">Western central China</p>
                    <p className="slider-card__text-descrip">Panda</p>
                    <p className="slider-card__text-follow">Follow</p>
                  </div>
                </div>
                <div className="slider-card" data-column="2">
                  <img src={require("../../../assets/images/animals/penguin.jpg")} alt="Penguin"/>
                  <div className="slider-card__text">
                    <div className="slider-card__text-plus"><span>+</span></div>
                    <p className="slider-card__text-geo">Sea of the Southern Hemisphere, Antarctic waters</p>
                    <p className="slider-card__text-descrip">Penguin</p>
                    <p className="slider-card__text-follow">Follow</p>
                  </div>
                </div>
                <div className="slider-card" data-column="2">
                  <img src={require("../../../assets/images/animals/eagle.jpg")} alt="Eagle"/>
                  <div className="slider-card__text">
                    <div className="slider-card__text-plus"><span>+</span></div>
                    <p className="slider-card__text-geo">North America Islands near Los Angeles</p>
                    <p className="slider-card__text-descrip">Eagle</p>
                    <p className="slider-card__text-follow">Follow</p>
                  </div>
                </div>
                <div className="slider-card" data-column="3">
                  <img src={require("../../../assets/images/animals/squirrel.jpg")} alt="Squirrel"/>
                  <div className="slider-card__text">
                    <div className="slider-card__text-plus"><span>+</span></div>
                    <p className="slider-card__text-geo">Russia, forests in the Orenburg region</p>
                    <p className="slider-card__text-descrip">Squirrel</p>
                    <p className="slider-card__text-follow">Follow</p>
                  </div>
                </div>
                <div className="slider-card" data-column="3">
                  <img src={require("../../../assets/images/animals/gorilla.jpg")} alt="Gorilla"/>
                  <div className="slider-card__text">
                    <div className="slider-card__text-plus"><span>+</span></div>
                    <p className="slider-card__text-geo">Equatorial forests of western and central Africa</p>
                    <p className="slider-card__text-descrip">Gorilla</p>
                    <p className="slider-card__text-follow">Follow</p>
                  </div>
                </div>
                <div className="slider-card" data-column="4">
                  <img src={require("../../../assets/images/animals/slide-tiger.png")} alt="Tiger"/>
                  <div className="slider-card__text">
                    <div className="slider-card__text-plus"><span>+</span></div>
                    <p className="slider-card__text-geo">Russia, Amur region</p>
                    <p className="slider-card__text-descrip">Tiger</p>
                    <p className="slider-card__text-follow">Follow</p>
                  </div>
                </div>
                <div className="slider-card" data-column="4">
                  <img src={require("../../../assets/images/animals/slide-alligator.png")} alt="Alligator"/>
                  <div className="slider-card__text">
                    <div className="slider-card__text-plus"><span>+</span></div>
                    <p className="slider-card__text-geo">American state of Florida</p>
                    <p className="slider-card__text-descrip">Alligator</p>
                    <p className="slider-card__text-follow">Follow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
