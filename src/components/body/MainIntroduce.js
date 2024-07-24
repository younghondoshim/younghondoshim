import React from "react";
import "../../assets/styles/body/MainIntroduce.css";
import FadeInEffect from "../animation/FadeInEffect";

function MainIntroduce() {
  return (
    <div className="mainIntroduceWrap">
      <div></div>
      <div className="mainIntroduceFlex">
        <div className="mainIntroduceText">
          <FadeInEffect>
            <div className="mainIntroduceUpperText">[Rethink HIPHOP]</div>
            <div className="mainIntroduceMiddleText">
              더미텍스트는 감성적인 멜로디와 깊이 있는 가사로 많은 사람들의
              마음을 사로잡으며, 다양한 장르를 넘나들며 독창적인 음악 세계를
              구축하고 있습니다.
            </div>
            <div className="mainIntroduceLowerText">
              이 음악가는 감성적인 멜로디와 깊이 있는 가사로 많은 사람들의
              마음을 사로잡습니다. 다양한 장르를 넘나들며 독창적인 음악 세계를
              구축하고 있으며, 라이브 공연에서 보여주는 에너지와 열정으로
              팬들에게 잊지 못할 경험을 선사합니다
            </div>
          </FadeInEffect>
        </div>
      </div>
    </div>
  );
}

export default MainIntroduce;
