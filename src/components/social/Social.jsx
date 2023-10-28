import React from "react";

import "./social.css";

const SubscribeCard = () => (
  <div className="container-1 social-card">
    <p className="heading">Subscribe to my news letter</p>
    <input type="text" placeholder="Enter your Name" />
    <input type="email" placeholder="Enter your email address" />
    <button className="subscribe">Subscribe</button>
  </div>
);

const FollowCard = () => (
  <div className="container-2 social-card">
    <p className="heading">Follow me @</p>
    <div className="social-links">
      <span className="instagram">
        <i className="fa-brands fa-instagram fa-2xl"></i>
      </span>
      <span className="twitter">
        <i className="fa-brands fa-x-twitter fa-2xl"></i>
      </span>
      <span className="linkedin">
        <i className="fa-brands fa-linkedin fa-2xl"></i>
      </span>
    </div>
  </div>
);

const Social = () => {
  return (
    <div className="social">
      <SubscribeCard />
      <FollowCard />
    </div>
  );
};

export default Social;
