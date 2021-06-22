import React, { Component } from "react";

require("./zoogeography.scss");

export class Zoogeography extends React.Component {
  render() {
    return (
      <section class="zoogeography" id="zoogeography">
        <div class="wrapper">
          <div class="wrapper-inner_one-side">
            <div class="zoogeography-container">
              <h2>Zoogeography</h2>
              <div class="zoogeography-card__container">
                <div class="zoogeography-card" data-animal="eagle">
                  <div class="zoogeography-card__image">
                    <img src="../../../assets/images/card-eagle.jpg" alt="Eagle" style={{objectPosition: [0, 0]}} />
                  </div>
                  <h3>Eagle</h3>
                  <p>The broadcast is from an island near&nbsp;Los Angeles. Watch their real life.</p>
                  <button class="btn" onclick="window.location='pages/zoos/eagle.html'">
                    <span>Watch now</span>
                    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.601 7.10104C21.933 6.7691 21.933 6.23091 21.601 5.89896L16.1917 
                0.489594C15.8597 0.157648 15.3215 0.157648 14.9896 0.489594C14.6576 0.821539 
                14.6576 1.35973 14.9896 1.69168L19.7979 6.5L14.9896 11.3083C14.6576 11.6403 
                14.6576 12.1785 14.9896 12.5104C15.3215 12.8424 15.8597 12.8424 16.1917 
                12.5104L21.601 7.10104ZM-7.43094e-08 7.35L21 7.35L21 5.65L7.43094e-08 
                5.65L-7.43094e-08 7.35Z" fill="#3888FF" />
                    </svg>
                  </button>
                </div>
                <div class="zoogeography-card" data-animal="gorilla">
                  <div class="zoogeography-card__image">
                    <img src="../../../assets/images/card-gorilla.jpg" alt="Gorilla" style={{ objectPosition: ['0%', '20%']}} />
                  </div>
                  <h3>Gorilla</h3>
                  <p>The broadcast comes from the Democratic Republic of the Congo in a forest area.
                    Watch their life and their life together
                  </p>
                  <button class="btn" onclick="window.location='pages/zoos/gorilla.html'">
                    <span>Watch now</span>
                    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.601 7.10104C21.933 6.7691 21.933 6.23091 21.601 5.89896L16.1917 
                0.489594C15.8597 0.157648 15.3215 0.157648 14.9896 0.489594C14.6576 0.821539 
                14.6576 1.35973 14.9896 1.69168L19.7979 6.5L14.9896 11.3083C14.6576 11.6403 
                14.6576 12.1785 14.9896 12.5104C15.3215 12.8424 15.8597 12.8424 16.1917 
                12.5104L21.601 7.10104ZM-7.43094e-08 7.35L21 7.35L21 5.65L7.43094e-08 
                5.65L-7.43094e-08 7.35Z" fill="#3888FF" />
                    </svg>
                  </button>
                </div>
                <div class="zoogeography-card" data-animal="alligator">
                  <div class="zoogeography-card__image">
                    <img src="../../../assets/images/card-alligator.jpg" alt="Alligator" />
                  </div>
                  <h3>Alligator</h3>
                  <p>The broadcast is from Florida. See their real life</p>
                  <button class="btn" onclick="window.location='pages/zoos/alligator.html'">
                    <span>Watch now</span>
                    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.601 7.10104C21.933 6.7691 21.933 6.23091 21.601 5.89896L16.1917 
                0.489594C15.8597 0.157648 15.3215 0.157648 14.9896 0.489594C14.6576 0.821539 
                14.6576 1.35973 14.9896 1.69168L19.7979 6.5L14.9896 11.3083C14.6576 11.6403 
                14.6576 12.1785 14.9896 12.5104C15.3215 12.8424 15.8597 12.8424 16.1917 
                12.5104L21.601 7.10104ZM-7.43094e-08 7.35L21 7.35L21 5.65L7.43094e-08 
                5.65L-7.43094e-08 7.35Z" fill="#3888FF" />
                    </svg>
                  </button>
                </div>
                <div class="zoogeography-card" data-animal="panda">
                  <div class="zoogeography-card__image">
                    <img src="../../../assets/images/card-panda.jpg" alt="Panda" />
                  </div>
                  <h3>Panda</h3>
                  <p>The broadcast comes from the mountainous regions of central China: Sichuan
                    and Tibet. See their real life together.
                  </p>
                  <button class="btn" onclick="window.location='pages/zoos/panda.html'">
                    <span>Watch now</span>
                    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.601 7.10104C21.933 6.7691 21.933 6.23091 21.601 5.89896L16.1917 
                0.489594C15.8597 0.157648 15.3215 0.157648 14.9896 0.489594C14.6576 0.821539 
                14.6576 1.35973 14.9896 1.69168L19.7979 6.5L14.9896 11.3083C14.6576 11.6403 
                14.6576 12.1785 14.9896 12.5104C15.3215 12.8424 15.8597 12.8424 16.1917 
                12.5104L21.601 7.10104ZM-7.43094e-08 7.35L21 7.35L21 5.65L7.43094e-08 
                5.65L-7.43094e-08 7.35Z" fill="#3888FF" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
            <div class="zoogeography-map-container">
              <div class="zoogeography-map">
                <object class="marker-eagle marker-active" data="../../../assets/images/icons/marker-eagle.svg"
                  type="image/svg+xml" data-animal="eagle"></object>
                <object class="marker-panda" data="../../../assets/images/icons/marker-panda.svg" type="image/svg+xml"
                  data-animal="panda"></object>
                <object class="marker-gorilla" data="../../../assets/images/icons/marker-gorilla.svg" type="image/svg+xml"
                  data-animal="gorilla"></object>
                <object class="marker-alligator" data="../../../assets/images/icons/marker-alligator.svg" type="image/svg+xml"
                  data-animal="aligator"></object>
              </div>
            </div>
          </div>
        </div>
      </section>);
  }
}