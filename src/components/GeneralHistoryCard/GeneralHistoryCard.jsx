import React from "react";
import "./GeneralHistoryCard.css";

export const GeneralHistoryCard = ({ type, data }) => {
  return (
    <div className="GeneralcardMainDiv">
      <div className="GeneralcardPropertyHeading">General Details</div>
      <div className="GeneralcardContent">
        <div>
          <div>
            <img src="./images/city.svg" alt="" />{" "}
            <div>{data.property.address}</div>
          </div>
          <div>Bangalore</div>
        </div>
        <div>
          <div>
            <img src="./images/status.svg" alt="" /> <div>{data.status}</div>
          </div>
          <div id="GeneralcardContentStatus">For Sale</div>
        </div>
        <div>
          <div>
            <img src="./images/id.svg" alt="" /> <div>Property ID</div>
          </div>
          <div>ZM9678</div>
        </div>
        <div>
          <div>
            <img src="./images/aadhaarsvg.svg" alt="" />
            <div>Owner Aadhar No.</div>
          </div>
          <div>XXXX XXXX 2204</div>
        </div>
      </div>
    </div>
  );
};
