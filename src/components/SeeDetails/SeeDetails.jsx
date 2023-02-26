import React from "react";
import MediumButton from "../Button/Medium/MediumButton";
import DocumentsCard from "../DocumentsCard/DocumentsCard";
import { GeneralHistoryCard } from "../GeneralHistoryCard/GeneralHistoryCard";
import OwnershipHistoryCard from "../OwnershipHistoryCard/OwnershipHistoryCard";
import PropertyDetailsCard from "../PropertyDetailsCard/PropertyDetailsCard";
import "./SeeDetails.css";

const SeeDetails = ({ submitHandler, data }) => {
  return (
    <div className="seeDetailsMainDiv">
      <div className="seeDetailsTopDiv">
        <div className="seeDetailsBackImg">
          <img
            src="./images/goback.svg"
            alt=""
            onClick={() => submitHandler()}
          />
          <div className="seeDetailsAdd ">
            {/* L376 / A, 14th B Cross Rd, Sector 6, HSR Layout, Bengaluru,
            Karnataka 560102 */}
            {data.property.line} {data.property.locality} {data.property.city}{" "}
            {data.property.pincode}
          </div>
        </div>
        <div>
          <MediumButton text={"Sell Property"} />
        </div>

        <div></div>
      </div>
      <div className="seeDetailsBottomDiv">
        <GeneralHistoryCard data={data} />
        <OwnershipHistoryCard data={data} />
        <PropertyDetailsCard data={data} />
        <DocumentsCard data={data} />
      </div>
    </div>
  );
};

export default SeeDetails;
