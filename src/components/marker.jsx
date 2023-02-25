import React from "react";

const MyMarker = ({ text, tooltip, $hover }) => {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
  };

  return (
    <div className={$hover ? "polygon hover" : "polygon"} onClick={handleClick}>
      <span className="polygonText" title={tooltip}>
        {text}
      </span>
    </div>
  );
};

export default MyMarker;
