import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFlowButton from "../../components/Button/LoginFlowButton/LoginFlowButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../components/Button/LoginFlowButton/loginFlowButton.css";

import "./signin.css";
import { useDispatch } from "react-redux";
import { login_success, logout } from "../../components/Redux/Auth/Auth.action";

const SignIn = ({ renderMain }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpRequested, setIsOtpRequested] = useState(false);

  function handleMobileNumberChange(event) {
    setPhone(event.target.value);
  }

  function handleOtpChange(event) {
    setOtp(event.target.value);
  }

  function handleOtpRequest(event) {
    console.log(process.env.REACT_APP_BASE_URL);

    fetch(process.env.REACT_APP_BASE_URL + "users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ phone }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsOtpRequested(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function sendOtpRequest(event) {
    fetch(process.env.REACT_APP_BASE_URL + "users/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, otp }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data.token) {
          console.log(data);
          localStorage.setItem("token", JSON.stringify(data.data.token));
          localStorage.setItem("role", JSON.stringify(data.data.role));
          localStorage.setItem("user", JSON.stringify(data.data.user));

          dispatch(login_success(data.data));

          navigate("dashboard");
        } else {
          setIsOtpRequested(false);
          localStorage.clear();
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="loginMainDiv">
      <form
        action=""
        className="loginForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="loginHeading">Login</div>
        <label htmlFor="">Mobile Number</label>
        <input type="tel" value={phone} onChange={handleMobileNumberChange} />
        <div className="loginbtn">
          <button className="LoginBtn" onClick={() => handleOtpRequest()}>
            Get OTP
          </button>
        </div>
        {isOtpRequested && (
          <>
            <label htmlFor=""> OTP </label>

            <input type="number" value={otp} onChange={handleOtpChange} />
          </>
        )}
        {isOtpRequested && (
          <button className="LoginBtn" onClick={() => sendOtpRequest()}>
            Verify OTP
          </button>
        )}
      </form>
    </div>
  );
};

export default SignIn;
