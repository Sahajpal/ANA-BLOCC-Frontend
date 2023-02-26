import React from "react";
import Modal from "react-modal";
import "./modal.css"


export default function Otpmodal({ openModal, closeModal, modalIsOpen }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalOtp"
        overlayClassName="overlayOtp"
      >
        <h2 className="otpHeading">Verify OTP</h2>
        <div className="divider"></div>
        <div className="propertyHeading">Property 1</div>
        <div className="propertyAddress">
          L376 / A, 14th B Cross Rd, Sector 6, HSR Layout, Bengaluru, Karnataka
          560102
        </div>
        <div className="paraDivider"></div>
        <div className="detailsHeading">Your Details</div>
        <div className="aadharNumber">Aadhar Number</div>
        <div className="aadharNumberText">XXXX XXXX 2204</div>
        <div className="buyersName">Buyer's Name</div>
        <div className="buyersNameText">Jim Parsons</div>
        <div className="dateOfBirth">Date of Birth</div>
        <div className="dateOfBirthText">24 March 1973</div>
        <div className="enterOtp">Enter OTP</div>
        <input
          type="text"
          className="textBox"
          placeholder="Enter 4 digit OTP received on your linked number"
        />
        <button className="verifyButton" onClick={closeModal}>
          Verify Otp
        </button>
      </Modal>
    </div>
  );
}
