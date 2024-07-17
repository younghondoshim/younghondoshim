import React from "react";
import "../../assets/styles/body/MainWorks.css";
import InstagramFeed from "../../services/instagram";

function MainWorks() {
  return (
    <div className="mainWorksWrap">
      <div></div>
      <div className="mainWorksBox">
        <div className="mainWorksTitle">NEWS</div>
        <InstagramFeed />
        <div className="mainworksGrid"></div>
      </div>
    </div>
  );
}

export default MainWorks;
