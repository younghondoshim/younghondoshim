import React from "react";
import "../../assets/styles/body/MainWorks.css";
import arrowRight from "../../assets/images/arrowRight.svg";
import FadeInEffect from "../animation/FadeInEffect";
import LazyLoadWrapper from "../animation/LazyLoadWrapper";
import TextTypingAni from "../animation/TypingEffect";

function MainWorks() {
  return (
    <div className="mainWorksWrap">
      <div></div>
      <div className="mainWorksBox">
        <div className="mainWorksTitle">
          <LazyLoadWrapper>
            <TextTypingAni text={"DISCOGRAPHY"} />
          </LazyLoadWrapper>
        </div>
        <FadeInEffect>
          <div className="mainWorksGrid">
            <div className="mainWorksGridStyle mainWorksGridText mainWorksGridChangeStyle1">
              <div className="mainWorksGridUpperText">
                <div>영혼도심의</div>
                <div>디스코그래피</div>

                <div>
                  <a href="https://younghondoshim.bandcamp.com/">
                    더보기
                    <img
                      src={arrowRight}
                      alt="arrowRight"
                      className="mainWorksarrowRight"
                    />
                  </a>
                </div>
              </div>
              <div className="mainWorksGridLowerText">Produce By RENE</div>
            </div>
            <div className="mainWorksGridStyle mainWorksGridChangeStyle2">
              <div className="mainWorksBorder">
                <div className="mainWorksBorder2"></div>
                <iframe
                  style={{
                    border: 0,
                    width: "100%",
                    height: "100%",
                    fontFamily: "IBMPlexSansKr",
                  }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=1187629348/size=large/bgcol=ffffff/linkcol=04260c/tracklist=false/transparent=true/"
                  seamless
                  title="Skyland"
                >
                  <a href="https://younghondoshim.bandcamp.com/album/skyland">
                    skyland by RENE
                  </a>
                </iframe>
              </div>
            </div>
            <div className="mainWorksGridStyle mainWorksGridChangeStyle3">
              <div className="mainWorksBorder">
                <div className="mainWorksBorder2"></div>
                <iframe
                  style={{ border: 0, width: "100%", height: "100%" }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=3681298631/size=large/bgcol=ffffff/linkcol=04260c/tracklist=false/transparent=true/"
                  seamless
                  title="GEMS"
                >
                  <a href="https://younghondoshim.bandcamp.com/album/gems">
                    GEMS by IC KID, RENE
                  </a>
                </iframe>
              </div>
            </div>
            <div className="mainWorksGridStyle mainWorksGridChangeStyle4">
              <div className="mainWorksBorder">
                <div className="mainWorksBorder2"></div>
                <iframe
                  style={{ border: 0, width: "100%", height: "100%" }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=2320034669/size=large/bgcol=ffffff/linkcol=04260c/tracklist=false/transparent=true/"
                  seamless
                  title="Mystery"
                >
                  <a href="https://younghondoshim.bandcamp.com/album/mystery">
                    Mystery by RENE
                  </a>
                </iframe>
              </div>
            </div>
            <div className="mainWorksGridStyle mainWorksGridChangeStyle5">
              <div className="mainWorksBorder">
                <div className="mainWorksBorder2"></div>
                <iframe
                  style={{ border: 0, width: "100%", height: "100%" }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=389456900/size=large/bgcol=ffffff/linkcol=04260c/tracklist=false/track=2741013736/transparent=true/"
                  seamless
                  title="Entropy"
                >
                  <a href="https://younghondoshim.bandcamp.com/album/entropy">
                    entropy by KWAII + RENE
                  </a>
                </iframe>
              </div>
            </div>
            <div className="mainWorksSwitchDisplay">
              <a href="https://younghondoshim.bandcamp.com/">
                더보기
                <img
                  src={arrowRight}
                  alt="arrowRight"
                  className="mainWorksarrowRight"
                />
              </a>
            </div>
          </div>
        </FadeInEffect>
        <div className="mainworksGrid"></div>
      </div>
    </div>
  );
}

export default MainWorks;
