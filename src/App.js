import { Route, Routes } from "react-router-dom";
import MediumButton from "./components/Button/Medium/MediumButton";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Successmodal from "./components/Modal/Success/Successmodal";
import Map from "./components/Map/Map";
import Purchase from "./components/Purchase/Purchase";
import "./App.css";
import { GeneralHistoryCard } from "./components/GeneralHistoryCard/GeneralHistoryCard";
import OwnershipHistoryCard from "./components/OwnershipHistoryCard/OwnershipHistoryCard";
import PropertyDetailsCard from "./components/PropertyDetailsCard/PropertyDetailsCard";
import DocumentsCard from "./components/DocumentsCard/DocumentsCard";
import ActionCard from "./components/ActionCard/ActionCard";
import ActionCardNoBtn from "./components/ActionCardNoBtn/ActionCardNoBtn";
import SeeDetails from "./components/SeeDetails/SeeDetails";
import UserSigin from "./pages/UserSigin/UserSigin";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Manage from "./pages/Manage/Manage";

function App() {
  const usertoken = useSelector((state) => state.auth.token);

  const [token, settoken] = useState(
    usertoken || localStorage.getItem("token") || ""
  );

  return (
    <div className="app.css">
      {/* {token ? <Dashboard /> : <SignIn renderMain={renderMain} />} */}
      <Manage />
    </div>
  );
}

export default App;
