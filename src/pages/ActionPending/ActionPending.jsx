import React, { useState } from "react";
import ActionCard from "../../components/ActionCard/ActionCard";
import Otpmodal from "../../components/Modal/Otpmodal";
import "./ActionPending.css";
const ActionPending = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div className="ActionPendingMain">
      <div className="ActionPendingMainDefault">
        <div
          onClick={() => {
            openModal();
          }}
        >
          <ActionCard />
        </div>
        <div>
          <ActionCard />
        </div>
        <div>
          <ActionCard />
        </div>
        <div>
          <ActionCard />
        </div>
        <div>
          <ActionCard />
        </div>
        <div>
          <ActionCard />
        </div>
        <div>
          <ActionCard />
        </div>
      </div>

      <Otpmodal closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </div>
  );
};

export default ActionPending;
