import React from "react";
import "./BuyerAaadhaarCard.css";

const BuyerAaadhaarCard = () => {
  return (
    <div className="BuyerAaadhaarCardMain">
      <div>
        <div className="BuyerAaadhaarCardMainName">User Full Name</div>
        <div>(Buyer)</div>
      </div>
      <div>
        <div>
          <img src="./images/aadhaarsvg.svg" alt="" />
        </div>
        <div>Buyer Aadhar No.</div>
      </div>
      <div id="BuyerAaadhaarCardMainAaadhaar">XXXX XXXX 2204</div>
    </div>
  );
};

export default BuyerAaadhaarCard;
