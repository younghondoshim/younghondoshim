import React, { useState } from "react";
import "../../assets/styles/body/MainCallToAction.css";
import Logo from "../../assets/images/-Y2K-logo-TRANS-.png";
import Bandcamp from "../../assets/images/bandcampIconGreen.svg";
import Youtube from "../../assets/images/youtubeIconGreen.svg";
import Insta from "../../assets/images/instaIconGreen.svg";
import Cart from "../../assets/images/CartIconGreen.svg";
import ArrowUp from "../../assets/images/arrowUp.svg";
import FadeInEffect from "../animation/FadeInEffect";
import LazyLoadWrapper from "../animation/LazyLoadWrapper";
import TextTypingAni from "../animation/TypingEffect";

function MainCallToAction() {
  const [isTextTypingCompleted2, setIsTextTypingCompleted2] = useState(false);

  const handleTypingComplete2 = () => {
    setTimeout(() => setIsTextTypingCompleted2(true), 750);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mainCallToAction">
      <div></div>
      <div className="mainCallToActionBox">
        <div className="mainCallToActionTitle">
          <LazyLoadWrapper>
            <TextTypingAni
              text={"CONTECT ME"}
              onComplete={handleTypingComplete2}
              duration={550}
            />
          </LazyLoadWrapper>
        </div>
        {isTextTypingCompleted2 && (
          <FadeInEffect className="test">
            <div className="mainCallToActionTitleGrid">
              <div>
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
                      <img
                        src={Bandcamp}
                        alt="BandCampIcon"
                        className="BandCampIcon"
                      />
                    </div>
                  </div>
                  <div className="mainCallToActionImgAreaWrap">
                    <div>YouTube</div>
                    <div>
                      <img
                        src={Youtube}
                        alt="YouTubeIcon"
                        className="YouTubeIcon"
                      />
                    </div>
                  </div>
                  <div className="mainCallToActionImgAreaWrap">
                    <div>Instagram</div>
                    <div>
                      <img
                        src={Insta}
                        alt="InstagramIcon"
                        className="InstagramIcon"
                      />
                    </div>
                  </div>
                  <div className="mainCallToActionImgAreaWrap">
                    <div>Market</div>
                    <div>
                      <img src={Cart} alt="CartIcon" className="CartIcon" />
                    </div>
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
                    <span>사이트 제작 문의</span>{" "}
                    <span>yuhan6653@gmail.com</span>
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
          </FadeInEffect>
        )}
      </div>
    </div>
  );
}

export default MainCallToAction;
