import React from "react";
import "../../assets/styles/body/MainTitle.css";
import Logo from "../../assets/images/younghondoshimLogoGreenWithEnglish.svg";
import Bandcamp from "../../assets/images/bandcampIconGreen.svg";
import Youtube from "../../assets/images/youtubeIconGreen.svg";
import Insta from "../../assets/images/instaIconGreen.svg";
import Cart from "../../assets/images/CartIconGreen.svg";

function MainTitle() {
  return (
    <div className="mainTitlewrap">
      <div></div>
      <div className="mainTitleFlex">
        <div className="mainTitleBox">
          <div className="mainTitleUpperText">심장을 움직여라</div>
          <div className="mainTileMiddleText">
            <div className="mainTileMiddleText1">
              <div>RHYMES &</div> <div>BEATES</div>
            </div>
            <div className="mainTileMiddleText2">
              <div>MOVE THE</div> <div>SOULS</div>
            </div>
          </div>
          <div className="mainTitleLowerText">
            <div className="mainTitleLowerText1">PRODUCE BY RENE</div>
            <div className="mainTitleLowerText2">
              <img
                src={Logo}
                alt="younghondoshimLogoGreen"
                className="younghondoshimLogoGreen"
              />
            </div>
            <div className="mainTitleLowerText3">
              <img src={Bandcamp} alt="bandcampIcon" className="bandcampIcon" />
              <img src={Youtube} alt="youtubeIcon" className="youtubeIcon" />
              <img src={Insta} alt="InstagramIcon" className="InstagramIcon" />
              <img src={Cart} alt="cartIcon" className="cartIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTitle;
