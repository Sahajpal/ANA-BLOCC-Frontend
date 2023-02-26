import React, { useState } from 'react'
import Modal from 'react-modal'
import './sellModal.css'
import MediumButton from '../../Button/Medium/MediumButton'

export default function SellModal() {
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
          L376 / A, 14th B Cross Rd, Sector 6, HSR Layout, Bengaluru, Karnataka
          560102
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
            <MediumButton text={'Sell Property'}></MediumButton>
          </div>
        </div>
      </Modal>
    </div>
  )
}
