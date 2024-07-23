import React from "react";
import "../../assets/styles/body/MainCallToAction.css";
import Logo from "../../assets/images/-Y2K-logo-TRANS-.png";
import Bandcamp from "../../assets/images/bandcampIconGreen.svg";
import Youtube from "../../assets/images/youtubeIconGreen.svg";
import Insta from "../../assets/images/instaIconGreen.svg";
import Cart from "../../assets/images/CartIconGreen.svg";
import ArrowUp from "../../assets/images/arrowUp.svg";

function MainCallToAction() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mainCallToAction">
      <div></div>
      <div className="mainCallToActionBox">
        <div className="mainCallToActionTitle">CONTACT ME</div>
        <div className="mainCallToActionTextArea">
          <div>감성적인 멜로디와 깊이 있는 가사로</div>
          <div>청중의 마음을 울리는 음악가입니다.</div>

          <div> 다양한 장르를 넘나들며</div>
          <div>독창적인 음악을 선보입니다.</div>
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
              <img
                src={ArrowUp}
                alt="ArrowUp"
                className="ArrowUp"
                onClick={scrollToTop}
              />
            </div>
            <div className="mainCallToActionEmail">
              <span>사이트 제작 문의</span> <span>yuhan6653@gmail.com</span>
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
