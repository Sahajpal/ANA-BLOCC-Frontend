import React from "react";
import MediumButton from "../Button/Medium/MediumButton";
import "./card.css";

const Card = () => {
  return (
    <div className="cardMainDiv">
      <div className="cardPropertyHeading">Property 1</div>
      <div className="cardPropertyStatusMain">
        <div className="cardownstatus">
          <div className="cardimgDiv">
            <img src="./images/owner.svg" alt="" /> <div>owner</div>
          </div>
          <div className="cardPersonName"> Sheldon Cooper</div>
        </div>
        <div className="cardownstatus">
          <div className="cardimgDiv">
            <img src="./images/status.svg" alt="" /> <div> status</div>
          </div>
          <div className="cardForSale">For Sale</div>
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
