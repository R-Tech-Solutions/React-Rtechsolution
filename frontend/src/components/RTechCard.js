import React from "react";
import "./RTechCard.css"; // Link to CSS file
import brand from '../assets/images/brand.jpg'

const RTechCard = () => {
  return (
    <div className="card-container">
      {/* Left side: Image */}
      <div className="image-container">
        <img src={brand} alt="R-Tech Solutions Logo" />
      </div>

      {/* Right side: Text */}
      <div className="text-container">
        <h2>R-Tech Solutions</h2>
        <a href="https://rtechsl.com" target="_blank" rel="noopener noreferrer">
          https://rtechsl.com
        </a>
      </div>
    </div>
  );
};

export default RTechCard;
