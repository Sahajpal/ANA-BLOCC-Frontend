import React from "react";
import "./manage.css";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";

const Manage = () => {
  return (
    <div className="manageMainDiv">
      <div className="manageMainDivLeft">
        <div className="navLeftDiv">
          <div>All</div>
          <div>Documents</div>
          <div>Register Sale</div>
        </div>
        <div className="propertyListDiv">
          <Card type={"city"} />
          <Card type={"city"} />
          <Card type={"city"} />
          <Card type={"city"} />
          <Card type={"city"} />
          <Card type={"city"} />
          <Card type={"city"} />
          <Card type={"city"} />
        </div>
      </div>
      <div className="manageMainDivRight">
        {/* <Map /> */}
        hi
      </div>
    </div>
  );
};

export default Manage;
