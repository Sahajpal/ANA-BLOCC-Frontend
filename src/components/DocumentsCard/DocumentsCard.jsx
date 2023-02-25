import React from "react";
import "./DocumentsCard.css";

const DocumentsCard = () => {
  return (
    <div className="DocumentcardMainDiv">
      <div className="DocumentcardPropertyHeading">Documents</div>
      <div className="DocumentcardContent">
        <div className="DocumentcardContentSub">
          <div>
            <img src="./images/upload.svg" alt="" />
          </div>
          <div>Doc1.pdf</div>
        </div>
        <div className="DocumentcardContentSub">
          <div>
            <img src="./images/upload.svg" alt="" />
          </div>
          <div>Doc1.pdf</div>
        </div>
        <div className="DocumentcardContentSub">
          <div>
            <img src="./images/upload.svg" alt="" />
          </div>
          <div>Doc1.pdf</div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsCard;
