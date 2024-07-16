import React from "react";
import "../../assets/styles/body/MainWorks.css";
import InstagramProfile from "../../services/instagram";

function MainWorks() {
  return (
    <div className="mainWorksWrap">
      <div></div>
      <div className="mainWorksBox">
        <div className="mainWorksTitle">MY NEWS</div>
        <InstagramProfile />
        <div className="mainworksGrid"></div>
      </div>
    </div>
  );
}

export default MainWorks;
