import React from "react";
import "./PropertyDetailsCard.css";

const PropertyDetailsCard = () => {
  return (
    <div className="PropertycardMainDiv">
      <div className="PropertycardPropertyHeading">Property Details</div>
      <div className="PropertycardContent">
        <div className="PropertycardImageContainer">
          <div className="PropertycardMainImg">
            <img src="./images/dummy.svg" alt="" />
          </div>
          <div className="PropertycardSubImgDiv">
            <div>
              <img src="./images/dummy.svg" alt="" />
            </div>
            <div>
              <img src="./images/dummy.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="propertuCardAddress">
          <div>
            <div>Address</div>
            <div>
              L376 / A, 14th B Cross Rd, Sector 6, HSR Layout, Bengaluru,
              Karnataka 560102
            </div>
          </div>
          <div>
            <div>Area (sq. ft.)</div>
            <div>400</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsCard;
