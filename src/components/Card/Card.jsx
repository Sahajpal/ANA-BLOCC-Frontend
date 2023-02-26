import React from "react";
import MediumButton from "../Button/Medium/MediumButton";
import "./card.css";

const Card = ({ type, city, status, ownershipId }) => {
  return (
    <div className="cardMainDiv">
      <div className="cardPropertyHeading">Property {ownershipId}</div>
      <div className="cardPropertyStatusMain">
        <div className="cardownstatus">
          <div className="cardimgDiv">
            <img
              src={type == "owner" ? "./images/owner.svg" : "./images/city.svg"}
              alt=""
            />{" "}
            <div>{type}</div>
          </div>
          <div className="cardPersonName"> {city}</div>
        </div>
        <div className="cardownstatus">
          <div className="cardimgDiv">
            <img src="./images/status.svg" alt="" /> <div> status</div>
          </div>
          <div className="cardForSale">{status}</div>
        </div>
      </div>
      <div className="cardButtonDiv">
        <MediumButton text={"See Details"} />
      </div>
      <div className="cardDocDiv">
        <img src="./images/doc.svg" alt="" />{" "}
        <div>
          {"2"} Documents added. {"5"} Missing
        </div>
      </div>
    </div>
  );
};

export default Card;
