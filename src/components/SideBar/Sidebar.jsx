import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [admin, setadmin] = useState(false);
  const [activeTab, setactiveTab] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="sidebarMain">
      <div className="sidebarLogoDiv">
        <img src="./images/logo.svg" alt="" />
      </div>
      {admin ? (
        <div className="sidebarList">
          <div className="">
            <img src="./images/manage.svg" alt="" />
            <div>Manage</div>
          </div>
          <div>
            <img src="./images/doc.svg" alt="" />
            <div>Documents</div>
          </div>
          <div>
            <img src="./images/initiatesale.svg" alt="" />
            <div>Initiate Sale</div>
          </div>
        </div>
      ) : (
        <div className="sidebarList">
          <div
            id={activeTab == 1 ? "activeSidebar" : ""}
            onClick={() => {
              setactiveTab(1);
              navigate("/dashboard");
            }}
          >
            <img src="./images/property.svg" alt="" />
            <div>My Properties</div>
          </div>
          <div
            id={activeTab == 2 ? "activeSidebar" : ""}
            onClick={() => {
              setactiveTab(2);
              navigate("/action");
            }}
          >
            <img src="./images/action.svg" alt="" />
            <div>Actions Pending</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
