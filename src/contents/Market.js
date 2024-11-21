import React from "react";
import image1 from "../images/V1.webp";
import image2 from "../images/shoes.jpg";
import image3 from "../images/women's clothes.jpg";

function Market() {
  return (
    <div className="component">
      <h1>Market</h1>
      <div className="image">
        <div className="img">
          <img src={image1} alt="product1" loading="lazy" />
        </div>
        <div className="img">
          <img src={image2} alt="product2" loading="lazy" />
        </div>
        <div className="img">
          <img src={image3} alt="product3" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default Market;
