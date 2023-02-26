import React from "react";
import MediumButton from "../Button/Medium/MediumButton";
import DocumentsCard from "../DocumentsCard/DocumentsCard";
import { GeneralHistoryCard } from "../GeneralHistoryCard/GeneralHistoryCard";
import SellModal from "../Modal/SellModal/SellModal";
import OwnershipHistoryCard from "../OwnershipHistoryCard/OwnershipHistoryCard";
import PropertyDetailsCard from "../PropertyDetailsCard/PropertyDetailsCard";
import "./SeeDetails.css";
import { useState } from "react";

const SeeDetails = ({ submitHandler, data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

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
            {data.property.address.line} {data.property.address.locality}{" "}
            {data.property.address.city} {data.property.address.pincode}
          </div>
        </div>
        <div>
          <MediumButton
            text={"Sell Property"}
            submitHandler={() => {
              openModal();
            }}
          />
        </div>

        <div></div>
      </div>
      <div className="seeDetailsBottomDiv">
        <GeneralHistoryCard data={data} />
        <OwnershipHistoryCard data={data} />
        <PropertyDetailsCard data={data} />
        <DocumentsCard data={data} />
      </div>
      <SellModal
        openModal={openModal}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        data={data}
      />
    </div>
  );
};

export default SeeDetails;
