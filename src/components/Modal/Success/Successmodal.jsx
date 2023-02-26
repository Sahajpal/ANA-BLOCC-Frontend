import React, { useState } from "react";
import Modal from "react-modal";
import "./successmodal.css";
import MediumButton from "../../Button/Medium/MediumButton";
import Lottie from "react-lottie";
import animationData from "../../../lotties/success.json";

export default function Successmodal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Upload Documents</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalSuccess"
        overlayClassName="overlaySuccess"
      >
        <div className="animation">
          <Lottie options={defaultOptions} />
        </div>
        <h2 className="headingSuccess">Payment Successful!</h2>
        <div className="subHeadingSuccess">
          Congratulations on your new purchase! Property details can be seen in
          'My Properties'
        </div>
        <div className="detailsButton">
          <MediumButton text={"See Details"}></MediumButton>
        </div>
      </Modal>
    </div>
  );
}
