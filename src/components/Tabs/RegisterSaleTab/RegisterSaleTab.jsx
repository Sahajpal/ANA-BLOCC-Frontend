import React from "react";
import MediumButton from "../../Button/Medium/MediumButton";
import BuyerAaadhaarCard from "../../RegisterSale/BuyerAaadhaarCard/BuyerAaadhaarCard";
import CurrentOwnerDetailCard from "../../RegisterSale/CurrentOwnerDetailCard/CurrentOwnerDetailCard";
import PropertySellingPrice from "../../RegisterSale/PropertySellingPrice/PropertySellingPrice";
import "./RegisterSaleTab.css";

const RegisterSaleTab = () => {
  return (
    <div className="RSTabMainDiv">
      <div className="RSTabMainDivList">
        <CurrentOwnerDetailCard />
        <BuyerAaadhaarCard />
        <PropertySellingPrice />
      </div>

      <div className="RSTabMainDivBtnDiv">
        <div className="RSTabMainDivBtnDivSub">
          <MediumButton text={"Register Sale"} />
        </div>
      </div>
    </div>
  );
};

export default RegisterSaleTab;
