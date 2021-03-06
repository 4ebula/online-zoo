import React, { Component } from 'react';

require('./reviews.scss');

export class Reviews extends React.Component {
  render() {
    return (
      <section className="reviews" id="testimonials">
        <div className="wrapper">
          <div className="wrapper-inner_one-side">
            <div className="testimonial">
              <h2>Testimonials</h2>
              <h3>You can make us smile</h3>
              <p>We want to make animal observation and interaction accessible.
                You can leave your wishes on how to make the service more convenient,
                and most importantly, more interesting for you.</p>
              <button className="btn btn__filled">Leave feedback</button>
            </div>
            <div className="reviews-section">
              <div className="see-more">
                <button className="btn">
                  <span>See more reviews</span>
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
              <div className="review-container">
                <div className="review-slider">
                  <div className="review-card">
                    <h4>Alena Andreeva</h4>
                    <p>“Had a great time with my kids and made the cute pandas happy with delicious
                      treats. I think I will use your service more than once, thanks!”</p>
                  </div>
                  <div className="review-card">
                    <h4>Joe Brown</h4>
                    <p>“Thank you for the cool service, I turn on broadcasts with animals while working
                      in the background, it relaxes and cheers up”</p>
                  </div>
                </div>
              </div>
              <div className="direction-buttons">
                <button className="btn-round left">
                  <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292892 8.7071C-0.0976315 8.31658 -0.0976314 7.68342
                0.292893 7.29289L6.65686 0.928931C7.04738 0.538406 7.68054 0.538406 8.07107
                0.928931C8.46159 1.31946 8.46159 1.95262 8.07107 2.34314L2.41421 8L8.07107
                13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738
                15.4616 6.65685 15.0711L0.292892 8.7071ZM29 9L1 9L1 7L29 7L29 9Z" fill="#0B0B0B" />
                  </svg>
                </button>
                <button className="btn-round right">
                  <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.7071 8.7071C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431
                0.928931C21.9526 0.538406 21.3195 0.538406 20.9289 0.928931C20.5384 1.31946
                20.5384 1.95262 20.9289 2.34314L26.5858 8L20.9289 13.6569C20.5384 14.0474
                20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071
                8.7071ZM6.3452e-08 9L28 9L28 7L-6.3452e-08 7L6.3452e-08 9Z" fill="#0B0B0B" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>);
  }
}