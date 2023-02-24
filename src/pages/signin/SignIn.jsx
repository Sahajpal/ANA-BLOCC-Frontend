import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginFlowButton from "../../components/Button/LoginFlowButton/LoginFlowButton";
import "./signin.css";

const SignIn = () => {
  const [emailLogin, setemailLogin] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showpwd, setshowpwd] = useState(false);
  const [aadhaar, setaadhaar] = useState("");
  const [otp, setotp] = useState();

  const emailLoginFunction = (e) => {};
  const aadhaarLoginFunction = (e) => {};

  useEffect(() => {
    return () => {};
  }, [emailLogin]);

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
          <div className="aadhaardiv">
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
            <LoginFlowButton text={"Login"} />
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
          <div className="aadhaardiv">
            <div className="regenerateOtp">Regenerate OTP</div>
            <div
              className="goBackBtn"
              onClick={() => {
                setemailLogin(true);
              }}
            >
              Go Back
            </div>
          </div>
          <div className="loginbtn">
            <LoginFlowButton text={"Login"} />
          </div>
        </form>
      )}
    </div>
  );
};

export default SignIn;
