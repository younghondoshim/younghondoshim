import React, { useState } from "react";
import "../../assets/styles/body/MainCallToAction.css";
import Logo from "../../assets/images/-Y2K-logo-TRANS-.png";
import Bandcamp from "../../assets/images/bandcampIconGreen.svg";
import Youtube from "../../assets/images/youtubeIconGreen.svg";
import Insta from "../../assets/images/instaIconGreen.svg";
import Cart from "../../assets/images/CartIconGreen.svg";
import ArrowUp from "../../assets/images/arrowUp.svg";
import EventChain from "../animation/EventChain";
// import LazyLoadWrapper from "../animation/LazyLoadWrapper";
import FadeInEffect from "../animation/FadeInEffect";

function MainCallToAction() {
  const [isTextTypingCompleted3, setIsTextTypingCompleted3] = useState(false);

  const handleTypingComplete3 = () => {
    setTimeout(() => setIsTextTypingCompleted3(true), 250);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mainCallToAction">
      <div></div>
      <div className="mainCallToActionBox">
        <div className="mainCallToActionTitle">
          <FadeInEffect onComplete={handleTypingComplete3}>
            BE CONNECTED
          </FadeInEffect>
        </div>

        <EventChain show={isTextTypingCompleted3} timer={600}>
          <div className="mainCallToActionTitleGrid">
            <div className="mainCallToActionImgArea">
              <div className="mainCallToActionImgAreaWrap">
                <div>Bandcamp</div>
                <div>
                  <a
                    href="https://younghondoshim.bandcamp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Bandcamp}
                      alt="BandCampIcon"
                      className="BandCampIcon"
                    />
                  </a>
                </div>
              </div>
              <div className="mainCallToActionImgAreaWrap">
                <div>YouTube</div>
                <div>
                  <a
                    href="https://www.youtube.com/@younghondoshim"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Youtube}
                      alt="YouTubeIcon"
                      className="YouTubeIcon"
                    />
                  </a>
                </div>
              </div>
              <div className="mainCallToActionImgAreaWrap">
                <div>Instagram</div>
                <div>
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
                </div>
              </div>
              <div className="mainCallToActionImgAreaWrap">
                <div>Market</div>
                <div>
                  <a
                    href="https://smartstore.naver.com/younghondoshim"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Cart} alt="CartIcon" className="CartIcon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mainCallToActionFooter">
              <div className="mainCallToActionFooterLeft">
                <div className="mainCallToActionTextArea">
                  <div>younghondoshim@outlook.com</div>
                </div>
                <div className="mainCallToActionEmail">
                  <span>사이트 제작 문의</span> <span>yuhan6653@gmail.com</span>
                </div>
              </div>
              <div className="mainCallToActionFooterRight">
                <div className="mainCallToActtionFooterArrowUp">
                  <img
                    src={ArrowUp}
                    alt="ArrowUp"
                    className="ArrowUp"
                    onClick={scrollToTop}
                  />
                </div>
                <img
                  src={Logo}
                  alt="younghondoshimLogo"
                  className="younghondoshimLogo"
                />
              </div>
            </div>
          </div>
        </EventChain>
      </div>
    </div>
  );
}

export default MainCallToAction;
