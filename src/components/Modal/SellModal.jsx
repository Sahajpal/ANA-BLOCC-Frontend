import React, { useState } from 'react'
import Modal from 'react-modal'
import './sellModal.css'
import MediumButton from '../Button/Medium/MediumButton'

export default function Layout() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Upload Documents</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="header">
          <h2 className="heading">Sell Property</h2>
          <button className="cancelButton" onClick={closeModal}>
            <img src="./images/cancel.svg" alt="cancel"></img>
          </button>
        </div>
        <div className="divider"></div>
        <div className="propertyHeading">Property 1</div>
        <div className="propertyAddress">
          L376 / A, 14th B Cross Rd, Sector 6, HSR Layout, Bengaluru, Karnataka
          560102
        </div>
        <div className="paraDivider"></div>
        <div className="amountHeading">Enter Property Amount (in ₹)*</div>
        <input
          type="text"
          className="textBox3"
          placeholder="Enter amount in rupees"
        />
        <div className="paraDivider1"></div>
        <div className="detailsHeading">Buyer's Details</div>
        <div className="subHeading">
          Enter buyer’s details to initiate sale process
        </div>
        <div className="aadharNumber">Aadhar Number</div>
        <input
          type="text"
          className="textBox"
          placeholder="12 digit aadhar number"
        />
        <div className="buyersName">Buyer's name</div>
        <input
          type="text"
          className="textBox1"
          placeholder="Full name as on Aadhar Card"
        />
        <div className="dateOfBirth">Date of Birth</div>
        <input type="text" className="textBox2" placeholder="DD/MM/YYYY" />
        <div className="footer">
          <div className="actionButton">
            <MediumButton text={'Sell Property'}></MediumButton>
          </div>
        </div>
      </Modal>
    </div>
  )
}
