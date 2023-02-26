import React, { useState } from "react";
import Modal from "react-modal";
import "./sellModal.css";
import MediumButton from "../../Button/Medium/MediumButton";
import { initiateSaleUtil } from "../../../utils/userutils";

export default function SellModal({
  openModal,
  modalIsOpen,
  closeModal,
  data,
}) {
  const saleHandler = (data) => {
    const id = data.ownershipId;
    initiateSaleUtil(id, "1234123412341234");
    closeModal();
  };
  return (
    <div>
      <button onClick={openModal}>Upload Documents</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalSell"
        overlayClassName="overlaySell"
      >
        <div className="headerSell">
          <h2 className="headingSell">Sell Property</h2>
          <button className="cancelButton" onClick={closeModal}>
            <img src="./images/cancel.svg" alt="cancel"></img>
          </button>
        </div>
        <div className="divider"></div>
        <div className="propertyHeading">Property 1</div>
        <div className="propertyAddress">
          {data.property.address.line} {data.property.address.locality}
          {data.property.address.city}
          {data.property.address.pincode}
        </div>
        <div className="paraDivider"></div>
        <div className="amountHeadingSell">Enter Property Amount (in ₹)*</div>
        <input
          type="text"
          className="textBox3"
          placeholder="Enter amount in rupees"
        />
        <div className="paraDivider1"></div>
        <div className="detailsHeadingSell">Buyer's Details</div>
        <div className="subHeadingSell">
          Enter buyer’s details to initiate sale process
        </div>
        <div className="aadharNumberSell">Aadhar Number</div>
        <input
          type="text"
          className="textBoxSell"
          placeholder="12 digit aadhar number"
        />
        <div className="buyersNameSell">Buyer's name</div>
        <input
          type="text"
          className="textBoxSell1"
          placeholder="Full name as on Aadhar Card"
        />
        <div className="dateOfBirthSell">Date of Birth</div>
        <input type="text" className="textBoxSell2" placeholder="DD/MM/YYYY" />
        <div className="footer">
          <div className="sellButton">
            <MediumButton
              text={"Sell Property"}
              submitHandler={() => saleHandler(data)}
            ></MediumButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}
