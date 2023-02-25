import React from "react";
import MediumButton from "../../Button/Medium/MediumButton";
import CurrentOwnerCard from "../../RegisterSale/CurrentOwnerCard/CurrentOwnerCard";
import "./DocumentTab.css";

const DocumentTab = () => {
  return (
    <div className="DocumentTabMainDiv">
      <div className="DocumentTabMainDivList">
        <CurrentOwnerCard text={"Current Owner"} />
        <CurrentOwnerCard text={"Buyer"} />
      </div>

      <div className="DocumentTabMainDivBtnDiv">
        <div className="DocumentTabMainDivBtnDivSub">
          <MediumButton text={"Approve Documents"} />
        </div>
      </div>
    </div>
  );
};

export default DocumentTab;
