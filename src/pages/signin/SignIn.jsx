import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFlowButton from "../../components/Button/LoginFlowButton/LoginFlowButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./signin.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [isOtpRequested, setIsOtpRequested] = useState(false);

  function handleMobileNumberChange(event) {
    setMobileNumber(event.target.value);
  }

  function handleOtpRequest(event) {
    // event.preventDefault();
    console.log("hi", process.env.REACT_APP_BASE_URL);

    fetch(process.env.REACT_APP_BASE_URL + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobileNumber }),
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

  return (
    <div className="loginMainDiv">
      <form
        action=""
        className="loginForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleOtpRequest();
        }}
      >
        <div className="loginHeading">Login</div>
        <label htmlFor="">Mobile Number</label>
        <input
          type="tel"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
        />
        <div className="loginbtn">
          <LoginFlowButton
            text={"Request OTP"}
            // submitHandler={() => handleOtpRequest()}
          />
        </div>
        {isOtpRequested && (
          <label>
            OTP:
            <input type="number" />
          </label>
        )}
        {isOtpRequested && <button>Verify OTP</button>}
      </form>
    </div>
  );
};

export default SignIn;
