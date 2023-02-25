import React, { useState } from "react";
import "./manage.css";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";
import DocumentTab from "../../components/Tabs/DocumentTab/DocumentTab";
import RegisterSaleTab from "../../components/Tabs/RegisterSaleTab/RegisterSaleTab";
import SeeDetails from "../../components/SeeDetails/SeeDetails";

const Manage = () => {
  const [tab, settab] = useState(2);
  const [seedetails, setseedetails] = useState(true);
  const changedetails = () => {
    setseedetails(false);
  };
  return (
    <div className="manageMainDiv">
      {!seedetails ? (
        <>
          <div className="manageMainDivLeft">
            <div className="navLeftDiv">
              <div onClick={() => settab(1)}>All</div>
              <div onClick={() => settab(2)}>Documents</div>
              <div onClick={() => settab(3)}>Register Sale</div>
            </div>
            <div className="propertyListDiv">
              <div
                onClick={() => {
                  setseedetails(true);
                }}
              >
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
            {tab == 1 ? (
              <Map />
            ) : tab == 2 ? (
              <DocumentTab />
            ) : (
              <RegisterSaleTab />
            )}
          </div>
        </>
      ) : (
        <SeeDetails submitHandler={changedetails} />
      )}
    </div>
  );
};

export default Manage;
