import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="mainNav">
      <div className="navLeftDiv">
        <div>All</div>
        <div>Properties in-transit</div>
        <div>Register Sale</div>
      </div>
      <div className="navProfileDiv">Profile</div>
    </div>
  );
};

export default Navbar;
