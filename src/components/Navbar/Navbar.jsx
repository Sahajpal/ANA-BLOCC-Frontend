import React from "react";
import "./navbar.css";
import connectWallet from "../../utils/wallet";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Auth/Auth.action";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function attemptConnectWallet() {
    console.log("Tryna connect Wallet...");
    await connectWallet();
    console.log("Voila");
  }

  const Logout = () => {
    localStorage.clear();
    useDispatch(logout());
    navigate("/");
  };
  return (
    <div className="mainNav">
      <div className="navProfileDiv" onClick={() => Logout()}>
        Logout
      </div>
      <button className="navWalletBtn" onClick={() => attemptConnectWallet()}>
        Connect Wallet
      </button>
    </div>
  );
};

export default Navbar;
