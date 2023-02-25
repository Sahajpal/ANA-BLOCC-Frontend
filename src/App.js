import { Route, Routes } from "react-router-dom";
import MediumButton from "./components/Button/Medium/MediumButton";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signin/SignIn";
import Map from "./components/Map/Map";
import "./App.css";
import { GeneralHistoryCard } from "./components/GeneralHistoryCard/GeneralHistoryCard";
import OwnershipHistoryCard from "./components/OwnershipHistoryCard/OwnershipHistoryCard";
import PropertyDetailsCard from "./components/PropertyDetailsCard/PropertyDetailsCard";
import DocumentsCard from "./components/DocumentsCard/DocumentsCard";
import ActionCard from "./components/ActionCard/ActionCard";
import ActionCardNoBtn from "./components/ActionCardNoBtn/ActionCardNoBtn";

function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
