import React from "react";
import "./CurrentOwnerCard.css";

const CurrentOwnerCard = ({ text }) => {
  return (
    <div className="CurrentOwnerCard">
      <div className="CurrentOwnerCardTop">
        <div className="CurrentOwnerCardDivName">
          <div> User Full Name</div>({text})
        </div>
        <div className="CurrentOwnerCardDivAdd">
          L376 / A, 14th B Cross Rd, Sector 6, HSR Layout, Bengaluru, Karnataka
          560102
        </div>
        <div className="CurrentOwnerCardDivDoc">Documents</div>
      </div>

      <div className="CurrentOwnerCardList">
        <div>
          <div className="CurrentOwnerCardlabel">Affidavit</div>
          <div className="CurrentOwnerCardListDoc">
            <img src="./images/upload.svg" alt="" /> Document2.pdf
          </div>
        </div>
        <div>
          <div className="CurrentOwnerCardlabel">NOC</div>
          <div className="CurrentOwnerCardListDoc">
            <img src="./images/upload.svg" alt="" /> Document2.pdf
          </div>
        </div>
        <div>
          <div className="CurrentOwnerCardlabel">Mutation</div>
          <div className="CurrentOwnerCardListDoc">
            <img src="./images/upload.svg" alt="" /> Document2.pdf
          </div>
        </div>
      </div>
      <div type="button" className="CurrentOwnerCardListDocBtn">
        Raise Issue
      </div>
    </div>
  );
};

export default CurrentOwnerCard;
