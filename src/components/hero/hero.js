import React from "react";
import "./hero.css";

import model1 from "../../assets/fashion_model2.png";

function heroSlider() {
  return (
    <div className="hero">
      <div className="hero-title">
        <h1>Summer Wears Big Sales!!</h1>
        <p>Discover the best collection of vintage wears</p>
        <button className="button">Shop</button>
      </div>
      <div>
        <img src={model1} alt="model" />
      </div>
    </div>
  );
}

export default heroSlider;
