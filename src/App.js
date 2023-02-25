import { Route, Routes } from "react-router-dom";
import MediumButton from "./components/Button/Medium/MediumButton";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signin/SignIn";
import connectWallet from "./utils/wallet";
import Map from "./components/Map/Map";
import "./App.css";

function App() {
  async function attemptConnectWallet() {
    console.log('Tryna connect Wallet...');
    await connectWallet();
    console.log('Voila');
  }
  return (
    <div className="app">
      <Sidebar />
      <div className="mainContent">
        <Navbar />
        <div className="contentDiv">
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
          <div>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
