import React from "react";
import "./ActionCardNoBtn.css";

const ActionCardNoBtn = () => {
  return (
    <div className="actionCardNoBtnMainDivTop">
      <div className="actionCardNoBtnMainDiv">
        <div className="actionCardNoBtnPropertyHeading">Property 1</div>
        <div className="actionCardNoBtnPropertyStatusMain">
          <div className="actionCardNoBtnownstatus">
            <div className="actionCardNoBtnimgDiv">
              <img src={"./images/owner.svg"} alt="" /> <div>Seller</div>
            </div>
            <div className="actionCardNoBtnPersonName"> Sheldon Cooper</div>
          </div>
          <div className="actionCardNoBtnownstatus">
            <div className="actionCardNoBtnimgDiv">
              <img src="./images/status.svg" alt="" /> <div> status</div>
            </div>
            <div className="actionCardNoBtnForSale">For Sale</div>
          </div>
          <div className="actionCardNoBtnownstatus">
            <div className="actionCardNoBtnimgDiv">
              <img src={"./images/doc.svg"} alt="" /> <div>Documents</div>
            </div>
            <div className="actionCardNoBtnPersonName"> Sheldon Cooper</div>
          </div>
          <div className="actionCardNoBtnownstatus">
            <div className="actionCardNoBtnimgDiv">
              <img src={"./images/city.svg"} alt="" /> <div>City</div>
            </div>
            <div className="actionCardNoBtnPersonName"> Sheldon Cooper</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionCardNoBtn;
