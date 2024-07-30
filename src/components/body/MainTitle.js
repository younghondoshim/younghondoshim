import React from "react";
import "../../assets/styles/body/MainTitle.css";
import Logo from "../../assets/images/younghondoshimLogoGreenWithEnglish.svg";
import Bandcamp from "../../assets/images/bandcampIconGreen.svg";
import Youtube from "../../assets/images/youtubeIconGreen.svg";
import Insta from "../../assets/images/instaIconGreen.svg";
import Cart from "../../assets/images/CartIconGreen.svg";
import SizeUpEffect from "../animation/SizeUpEffect.js";
import SizeUpEffect2 from "../animation/SizeUpEffect2.js";

function MainTitle() {
  return (
    <div className="mainTitlewrap">
      <div></div>
      <div className="mainTitleFlex">
        <div className="mainTitleBox">
          <div className="mainTitleUpperText">마음을 잇는</div>
          <div className="mainTileMiddleText">
            <div className="mainTileMiddleText1">
              <div>
                <SizeUpEffect>HEART + SOUL</SizeUpEffect>
              </div>
            </div>
            <div className="mainTileMiddleText2">
              <SizeUpEffect2>RHYMES & BEATS</SizeUpEffect2>
            </div>
          </div>
          <div className="mainTitleLowerText">
            <div className="mainTitleLowerText1">produced by RENE.</div>
            <div className="mainTitleLowerText2">
              <img
                src={Logo}
                alt="younghondoshimLogoGreen"
                className="younghondoshimLogoGreen"
              />
            </div>
            <div className="mainTitleLowerText3">
              <a
                href="https://younghondoshim.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Bandcamp}
                  alt="bandcampIcon"
                  className="bandcampIcon"
                />
              </a>
              <a
                href="https://www.youtube.com/@younghondoshim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Youtube} alt="youtubeIcon" className="youtubeIcon" />
              </a>
              <a
                href="https://instagram.com/younghondoshim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Insta}
                  alt="InstagramIcon"
                  className="InstagramIcon"
                />
              </a>
              <a
                href="https://smartstore.naver.com/younghondoshim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Cart} alt="cartIcon" className="cartIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTitle;
