import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";
import Navbar from "../../components/Navbar/Navbar";
import PrivateRoute from "../../components/PrivateRoute";
import Sidebar from "../../components/SideBar/Sidebar";
import ActionPending from "../ActionPending/ActionPending";
import Manage from "../Manage/Manage";
import SignIn from "../signin/SignIn";
import "./dashboard.css";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="dashboardMain">
      {token && <Sidebar />}
      <div className="dashboardMainContent">
        {token && <Navbar />}
        <div className="contentDiv">
          <Routes>
            <Route element={<AuthRoutes />}>
              <Route path={"/"} element={<SignIn />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path={"/dashboard"} element={<Manage />} />
              <Route path={"/action"} element={<ActionPending />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

const AuthRoutes = ({}) => {
  const token = useSelector((state) => state.auth.token);

  return token ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default Dashboard;
