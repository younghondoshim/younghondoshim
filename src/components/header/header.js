import React from "react";
import "../../assets/styles/header/header.css";
import BlurEffect from "../../components/animation/blurEffect.js";

function Header() {
  return (
    <div>
      <div>
        <div className="headerWrap">
          <div className="headerMain">
            <div className="headerMainFont">YOUNGHONDOSHIM</div>
          </div>
          <div></div>
        </div>
        <BlurEffect></BlurEffect>
      </div>
    </div>
  );
}

export default Header;
