import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "./mediumbutton.css";

const MediumButton = ({ text, submitHandler }) => {
  return (
    <button
      type="submit"
      className="mediumbutton"
      onClick={() => {
        submitHandler();
      }}
    >
      {text}
    </button>
  );
};

export default MediumButton;
