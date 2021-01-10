import React from "react";
import "./header.css";

function header() {
  return (
    <div className="header">
      <div className="brand">
        <a>INNJEEZ</a>
      </div>
      <div className="nav">
        <ul className="nav-list">
          <li className="nav-items">
            <a>Home</a>
          </li>
          <li className="nav-items">
            <a>Shop</a>
          </li>
          <li className="nav-items">
            <a>Contact</a>
          </li>
          <li className="nav-items">
            <a>
              <i class="fas fa-search"></i>
            </a>
          </li>
          <li className="nav-items">
            <a>
              <i class="far fa-user"></i>
            </a>
          </li>
          <li className="nav-items">
            <a>
              <i class="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default header;
