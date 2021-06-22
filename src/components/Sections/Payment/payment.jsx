import React, { Component } from "react";

require("./payment.scss");

export class Payment extends React.Component {
  render() {
    return (
      <section class="payment" id="payment">
        <div class="wrapper">
          <div class="wrapper-inner_one-side">
            <h2>Pay &amp; feed</h2>
            <div class="payment-instruction">
              <div class="payment-instruction__text">
                <h3>Pay with VISA card</h3>
                <p>On the payment page, you need to enter the details of your "Visa" card and make a transfer. The
                  operation
                  will not take more than ~2 minutes.</p>
              </div>
              <div class="payment-instruction__text">
                <h3>Payment goes to the zoo</h3>
                <p>Payment goes to the account of the zoo and volunteers with employees receive a notification about the
                  donation.</p>
              </div>
              <div class="payment-instruction__text">
                <h3>The selected animal receives a treat</h3>
                <p>The staff takes the food you need for your chosen animal and delivers it to the animal. With your help,
                  the
                  animal is happy!</p>
              </div>
              <div class="payment-instruction__image"></div>
              <div class="payment-instruction__image"></div>
              <div class="payment-instruction__image"></div>
              <div class="payment-instruction__arrow"></div>
              <div class="payment-instruction__arrow"></div>
            </div>
          </div>
        </div>
      </section>);
  }
}