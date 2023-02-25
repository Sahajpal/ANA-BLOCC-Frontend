import React from "react";
import "./ActionCard.css";

const ActionCard = () => {
  return (
    <div className="actionCardMainDivTop">
      <div className="actionCardMainDiv">
        <div className="actionCardPropertyHeading">Property 1</div>
        <div className="actionCardPropertyStatusMain">
          <div className="actionCardownstatus">
            <div className="actionCardimgDiv">
              <img src={"./images/owner.svg"} alt="" /> <div>Seller</div>
            </div>
            <div className="actionCardPersonName"> Sheldon Cooper</div>
          </div>
          <div className="actionCardownstatus">
            <div className="actionCardimgDiv">
              <img src="./images/status.svg" alt="" /> <div> status</div>
            </div>
            <div className="actionCardForSale">For Sale</div>
          </div>
          <div className="actionCardownstatus">
            <div className="actionCardimgDiv">
              <img src={"./images/doc.svg"} alt="" /> <div>Documents</div>
            </div>
            <div className="actionCardPersonName"> Sheldon Cooper</div>
          </div>
          <div className="actionCardownstatus">
            <div className="actionCardimgDiv">
              <img src={"./images/city.svg"} alt="" /> <div>City</div>
            </div>
            <div className="actionCardPersonName"> Sheldon Cooper</div>
          </div>
        </div>
      </div>
      <div type="button" className="actionCardButtonDiv">
        Verify OTP
      </div>
    </div>
  );
};

export default ActionCard;
