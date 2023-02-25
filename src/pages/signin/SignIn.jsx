import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFlowButton from "../../components/Button/LoginFlowButton/LoginFlowButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./signin.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [emailLogin, setemailLogin] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showpwd, setshowpwd] = useState(false);
  const [aadhaar, setaadhaar] = useState("");
  const [otp, setotp] = useState();

  const emailLoginFunction = (e) => {
    if (email !== "anablocc@gmail.com" || password !== "12345") {
      toast.error("invalid credential!");
    } else {
      navigate("home");
    }
  };
  const aadhaarLoginFunction = (e) => {
    if (aadhaar !== 123456789012 || otp !== "12345") {
      toast.error("invalid credential!");
    } else {
      navigate("home");
    }
  };

  return (
    <div className="loginMainDiv">
      {emailLogin ? (
        <form
          action=""
          className="loginForm"
          onSubmit={(e) => {
            e.preventDefault();
            emailLoginFunction();
          }}
        >
          <div className="loginHeading">Login</div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <label htmlFor="">Password </label>
          <input
            type={showpwd ? "text" : "password"}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <div className="aadhaardivMain">
            <img
              src="./images/Aadhaar.svg"
              className="aadhaarimg"
              alt=""
              onClick={() => {
                setemailLogin(false);
              }}
            />
          </div>
          <div className="loginbtn">
            <LoginFlowButton
              text={"Login"}
              submitHandler={() => emailLoginFunction}
            />
          </div>
        </form>
      ) : (
        <form
          action=""
          className="loginForm"
          onSubmit={(e) => {
            e.preventDefault();
            aadhaarLoginFunction();
          }}
        >
          <div className="loginHeading">Aadhaar Login</div>
          <label htmlFor="">Aadhaar Number</label>
          <input
            type="number"
            value={aadhaar}
            onChange={(e) => setaadhaar(e.target.value)}
          />

          <label htmlFor="">OTP </label>
          <input
            type={"password"}
            value={otp}
            onChange={(e) => setotp(e.target.value)}
          />
          <div className="backDiv">
            <div className="regenerateOtp">
              Resend OTP <i class="fa-solid fa-arrows-rotate"></i>
            </div>
            <div
              className="goBackBtn"
              onClick={() => {
                setemailLogin(true);
              }}
            >
              <i class="fa-solid fa-arrow-left"></i> Go Back
            </div>
          </div>
          <div className="loginbtn">
            <LoginFlowButton text={"Login"} />
          </div>
        </form>
      )}
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default SignIn;
