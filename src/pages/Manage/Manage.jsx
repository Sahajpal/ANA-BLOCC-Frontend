import React, { useState, useEffect } from "react";
import "./manage.css";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";
import DocumentTab from "../../components/Tabs/DocumentTab/DocumentTab";
import RegisterSaleTab from "../../components/Tabs/RegisterSaleTab/RegisterSaleTab";
import SeeDetails from "../../components/SeeDetails/SeeDetails";
import { useSelector } from "react-redux";

const Manage = () => {
  // const user = JSON.parse(localStorage.getItem(user));
  // const { _id } = user;
  // console.log(_id, user);
  // const { role, userId } = useSelector((state) => state.auth);
  // console.log(role, userId);

  const [tab, settab] = useState(1);
  const [seedetails, setseedetails] = useState(false);
  const [userId, setuserId] = useState("");
  const [role, setrole] = useState("");
  const [cardData, setcardData] = useState([]);
  const [ownerId, setownerId] = useState(0);
  const [singleOwnerData, setsingleOwnerData] = useState();

  const getDataAdmin = (userId) => {
    fetch(process.env.REACT_APP_BASE_URL + "admin/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {});
  };
  const getDataUser = (userId) => {
    fetch(process.env.REACT_APP_BASE_URL + `users/${userId}/properties`, {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setcardData(data.data);
      });
  };

  const getDataUserSingle = (userId) => {
    fetch(process.env.REACT_APP_BASE_URL + `ownership/${userId}`, {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setsingleOwnerData(data);
      });
  };

  const changedetails = () => {
    setseedetails(false);
  };

  useEffect(() => {
    const { _id } = JSON.parse(localStorage.getItem("user"));
    const roleuser = JSON.parse(localStorage.getItem("role"));
    setrole(roleuser);
    setuserId(_id);

    getDataUser("63f9dca1b4b02daa53fdb977");
  }, []);

  useEffect(() => {
    getDataUserSingle(ownerId);
  }, [ownerId]);

  return (
    <div className="manageMainDiv">
      {!seedetails ? (
        <>
          <div className="manageMainDivLeft">
            <div className="navLeftDiv">
              <div id={tab == 1 ? "activNavTab" : ""} onClick={() => settab(1)}>
                All
              </div>
              <div id={tab == 2 ? "activNavTab" : ""} onClick={() => settab(2)}>
                Documents
              </div>
              <div id={tab == 3 ? "activNavTab" : ""} onClick={() => settab(3)}>
                Register Sale
              </div>
            </div>
            <div className="propertyListDiv">
              {cardData &&
                cardData.map(({ status, address, ownershipId }) => {
                  return (
                    <div
                      onClick={() => {
                        setownerId(ownershipId);
                        setseedetails(true);
                      }}
                    >
                      <Card
                        type={"city"}
                        status={status}
                        city={address.city}
                        ownershipId={ownershipId}
                      />
                    </div>
                  );
                })}
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
        <SeeDetails
          submitHandler={changedetails}
          data={singleOwnerData.ownership}
        />
      )}
    </div>
  );
};

export default Manage;
