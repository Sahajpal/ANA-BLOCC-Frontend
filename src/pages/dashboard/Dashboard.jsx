import React from "react";
import { Route, Routes } from "react-router-dom";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import ActionPending from "../ActionPending/ActionPending";
import Manage from "../Manage/Manage";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboardMain">
      <Sidebar />
      <div className="dashboardMainContent">
        <Navbar />
        <div className="contentDiv">
          <Routes>
            <Route path={""} element={<Manage />} />
            <Route path={"/action"} element={<ActionPending />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
