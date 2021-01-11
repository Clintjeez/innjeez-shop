import React from "react";
import "./latest.css";

import modelImg from "../../assets/fashion_model1.png";
import latest1Img from "../../assets/latest1.png";
import latest2Img from "../../assets/latest2.png";
import latest3Img from "../../assets/latest3.png";
import latest4Img from "../../assets/latest4.png";

function latest() {
  return (
    <div className="latest">
      <div className="latest-col">
        <div className="col col1">
          <img src={latest1Img} />
          <div className="col-text">
            <h2>Vintage ethnic</h2>
            <p>Ethnic style print short sleep summer shirt</p>
          </div>
        </div>
        <div className="col col2">
          <img src={latest2Img} />
          <div className="col-text">
            <h2>Adire africana</h2>
            <p>Culture craft local africa cotton styled v-neck shirt</p>
          </div>
        </div>
      </div>
      <div className="latest-row">
        <div className="row row1">
          <img src={latest3Img} />
          <div className="row-text">
            <h2>Vintage set</h2>
            <p>Sale 50%</p>
          </div>
        </div>
        <div className="row row2">
          <img src={latest4Img} />
          <div className="row-text">
            <h2>Vintage set</h2>
            <p>Sale 50%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default latest;
