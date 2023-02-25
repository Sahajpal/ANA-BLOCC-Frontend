import React, { useState } from "react";
import "./manage.css";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";
import DocumentTab from "../../components/Tabs/DocumentTab/DocumentTab";
import RegisterSaleTab from "../../components/Tabs/RegisterSaleTab/RegisterSaleTab";

const Manage = () => {
  const [tab, settab] = useState(2);

  return (
    <div className="manageMainDiv">
      <div className="manageMainDivLeft">
        <div className="navLeftDiv">
          <div onClick={() => settab(1)}>All</div>
          <div onClick={() => settab(2)}>Documents</div>
          <div onClick={() => settab(3)}>Register Sale</div>
        </div>
        <div className="propertyListDiv">
          <div>
            <Card type={"city"} />
          </div>
          <div>
            <Card type={"city"} />
          </div>
          <div>
            <Card type={"city"} />
          </div>
        </div>
      </div>
      <div className="manageMainDivRight">
        {/* <Map /> */}
        {tab == 1 ? <Map /> : tab == 2 ? <DocumentTab /> : <RegisterSaleTab />}
      </div>
    </div>
  );
};

export default Manage;
