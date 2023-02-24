import React from "react";
import "./loginFlowButton.css";

function LoginFlowButton({ text, submitHandler }) {
  return (
    <button type="submit" className="LoginBtn" onClick={() => submitHandler()}>
      {text}
    </button>
  );
}

export default LoginFlowButton;
