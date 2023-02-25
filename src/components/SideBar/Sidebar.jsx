import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebarMain">
      <div className="sidebarLogoDiv">Logo</div>
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
    </div>
  );
};

export default Sidebar;
