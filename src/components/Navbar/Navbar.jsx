import React from "react";
import "./navbar.css";
import connectWallet from "../../utils/wallet";

const Navbar = () => {
  async function attemptConnectWallet() {
    console.log('Tryna connect Wallet...');
    await connectWallet();
    console.log('Voila');
  }
  return (
    <div className="mainNav">
      <div className="navLeftDiv">
        <div>All</div>
        <div>Properties in-transit</div>
        <div>Register Sale</div>
      </div>
      <div className="navProfileDiv">Profile</div>
      <button onClick={ () => attemptConnectWallet() }> Connect Wallet</button>
    </div>
  );
};

export default Navbar;
