import React from "react";
import ActionCard from "../../components/ActionCard/ActionCard";
import "./ActionPending.css";
const ActionPending = () => {
  return (
    <div className="ActionPendingMain">
      <div className="ActionPendingMainDefault">
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
      </div>
    </div>
  );
};

export default ActionPending;
