import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [admin, setadmin] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="sidebarMain">
      <div className="sidebarLogoDiv">
        <img src="./images/logo.svg" alt="" />
      </div>
      {admin ? (
        <div className="sidebarList">
          <div>
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
            onClick={() => {
              navigate("");
            }}
          >
            <img src="./images/property.svg" alt="" />
            <div>My Properties</div>
          </div>
          <div
            onClick={() => {
              navigate("action");
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
