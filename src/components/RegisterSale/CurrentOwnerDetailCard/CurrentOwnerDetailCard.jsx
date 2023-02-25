import React from "react";
import "./CurrentOwnerDetailCard.css";

const CurrentOwnerDetailCard = () => {
  return (
    <div className="CurrentOwnerDetailCardDiv">
      <div className="CurrentOwnerDetailCardDivTop">
        <div className="CurrentOwnerDetailCardDivName">
          <div className="CurrentOwnerDetailCardDivNameMain">
            User Full Name
          </div>
          <div>(Current Owner)</div>
        </div>
        <div className="CurrentOwnerDetailCardAddress">
          L376 / A, 14th B Cross Rd, Sector 6, HSR Layout, Bengaluru, Karnataka
          560102
        </div>
      </div>
      <div className="CurrentOwnerDetailCardDivBottom">
        <div>
          <div className="CurrentOwnerDetailCardDivBottomName">
            <div>
              <img src="./images/owner.svg" alt="" />
            </div>
            Location
          </div>
          <div className="CurrentOwnerDetailCardDivBottomVal">HSR Layout</div>
        </div>
        <div>
          <div className="CurrentOwnerDetailCardDivBottomName">
            <div>
              <img src="./images/status.svg" alt="" />
            </div>
            Location
          </div>
          <div className="CurrentOwnerDetailCardDivBottomVal">In-transit</div>
        </div>
        <div>
          <div className="CurrentOwnerDetailCardDivBottomName">
            <div>
              <img src="./images/id.svg" alt="" />
            </div>
            Location
          </div>
          <div className="CurrentOwnerDetailCardDivBottomVal">ZM9678</div>
        </div>
        <div>
          <div className="CurrentOwnerDetailCardDivBottomName">
            <div>
              <img src="./images/aadhaarsvg.svg" alt="" />
            </div>
            Owner Aadhar No.
          </div>
          <div className="CurrentOwnerDetailCardDivBottomVal">
            XXXX XXXX 2204
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentOwnerDetailCard;
