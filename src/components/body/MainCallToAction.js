import React from "react";
import "../../assets/styles/body/MainCallToAction.css";
import Logo from "../../assets/images/younghondoshimLogoGreenBG.svg";
import Bandcamp from "../../assets/images/bandcampIconGreen.svg";
import Youtube from "../../assets/images/youtubeIconGreen.svg";
import Insta from "../../assets/images/instaIconGreen.svg";
import Cart from "../../assets/images/CartIconGreen.svg";
import ArrowUp from "../../assets/images/arrowUp.svg";

function MainCallToAction() {
  return (
    <div className="mainCallToAction">
      <div></div>
      <div className="mainCallToActionBox">
        <div className="mainCallToActionTitle">CONTACT ME</div>
        <div className="mainCallToActionTextArea">
          감성적인 멜로디와 깊이 있는 가사로
          <br /> 청중의 마음을 울리는 음악가입니다.
          <br />
          다양한 장르를 넘나들며
          <br /> 독창적인 음악을 선보입니다.
          <br />
        </div>
        <div className="mainCallToActionImgArea">
          <div className="mainCallToActionImgAreaWrap">
            <div>Bandcamp</div>
            <div>
              <img src={Bandcamp} alt="BandCampIcon" className="BandCampIcon" />
            </div>
          </div>
          <div className="mainCallToActionImgAreaWrap">
            <div>YouTube</div>
            <div>
              <img src={Youtube} alt="YouTubeIcon" className="YouTubeIcon" />
            </div>
          </div>
          <div className="mainCallToActionImgAreaWrap">
            <div>Instagram</div>
            <div>
              <img src={Insta} alt="InstagramIcon" className="InstagramIcon" />
            </div>
          </div>
          <div className="mainCallToActionImgAreaWrap">
            <div>Market</div>
            <div>
              <img src={Cart} alt="CartIcon" className="CartIcon" />
            </div>
          </div>
        </div>
        <div className="mainCallToActionFooter">
          <div className="mainCallToActionFooterLeft">
            <div>
              <img src={ArrowUp} alt="ArrowUp" className="ArrowUp" />
            </div>
            <div className="mainCallToActionEmail">
              사이트 제작 문의 yuhan6653@gmail.com
            </div>
          </div>
          <div className="mainCallToActionFooterRight">
            <img
              src={Logo}
              alt="younghondoshimLogo"
              className="younghondoshimLogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCallToAction;
