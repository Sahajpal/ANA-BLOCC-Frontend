import React from "react";
import "./OwnershipHistoryCard.css";

const OwnershipHistoryCard = () => {
  return (
    <div className="OwnershipCardMainDiv">
      <div className="OwnershipCardPropertyHeading">
        Ownership History
        <div className="OwnershipCardOwnerDetails">
          <div className="OwnershipCardOwnerDetailsHead">
            <div>
              <img src="./images/owner.svg" alt="" />{" "}
            </div>
            <div>Current Owner</div>
          </div>
          <div>Sheldon Cooper</div>
        </div>
      </div>
      <div className="OwnershipCardContent">
        <div>
          <div>
            <div>Date</div>
          </div>
          <div>22 Feb 2023</div>
        </div>
        <div>
          <div>
            <div>Sold From</div>
          </div>
          <div>Penelope Hofstadter</div>
        </div>
        <div>
          <div>
            <div> Bought by</div>
          </div>
          <div>Sheldon Cooper</div>
        </div>
        <div>
          <div>
            <div> Total Amount Paid</div>
          </div>
          <div>₹22,40,000</div>
        </div>
      </div>
    </div>
  );
};

export default OwnershipHistoryCard;
