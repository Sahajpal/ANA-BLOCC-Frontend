import React, { useState } from "react";
import Modal from "react-modal";
import "./modal.css";

export default function Otpmodal({ openModal, closeModal, modalIsOpen }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="heading">Verify OTP</h2>
        <div className="divider"></div>
        <div className="propertyHeading">Property 1</div>
        <div className="propertyAddress">
          L376 / A, 14th B Cross Rd, Sector 6, HSR Layout, Bengaluru, Karnataka
          560102
        </div>
        <div className="paraDivider"></div>
        <div className="detailsHeading">Your Details</div>
        <div className="subHeading">Aadhar Number</div>
        <div className="subHeading1">Buyer's Name</div>
        <div className="subHeading2">Date of Birth</div>
        <div className="enterOtp">Enter OTP</div>
        <input
          type="text"
          className="textBox"
          placeholder="Enter 4 digit OTP received on your linked number"
        />
        <button className="actionButton" onClick={closeModal}>
          Close Modal
        </button>
      </Modal>
    </div>
  );
}
