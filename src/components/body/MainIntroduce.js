import React, { useState } from "react";
import "../../assets/styles/body/MainIntroduce.css";
import FadeInEffect from "../animation/FadeInEffect.js";
import EventChain from "../animation/EventChain.js";

function MainIntroduce() {
  const [mainTriggernext1, setmainTriggernext1] = useState(false);
  const [mainTriggernext2, setmainTriggernext2] = useState(false);

  const handleMainTriggerNext1 = () => {
    setTimeout(() => {
      setmainTriggernext1(true);
      handleMainTriggerNext2();
    }, 600);
  };
  const handleMainTriggerNext2 = () => {
    setTimeout(() => {
      setmainTriggernext2(true);
    }, 600);
  };
  return (
    <div className="mainIntroduceWrap">
      <div></div>
      <div className="mainIntroduceFlex">
        <div className="mainIntroduceText">
          <FadeInEffect onComplete={handleMainTriggerNext1}>
            <div className="mainIntroduceUpperText">[Rethink HIPHOP]</div>

            <EventChain show={mainTriggernext1} timer={0}>
              <div className="mainIntroduceMiddleText">
                더미텍스트는 감성적인 멜로디와 깊이 있는 가사로 많은 사람들의
                마음을 사로잡으며, 다양한 장르를 넘나들며 독창적인 음악 세계를
                구축하고 있습니다.
              </div>
            </EventChain>

            <EventChain show={mainTriggernext2} timer={0}>
              <div className="mainIntroduceLowerText">
                이 음악가는 감성적인 멜로디와 깊이 있는 가사로 많은 사람들의
                마음을 사로잡습니다. 다양한 장르를 넘나들며 독창적인 음악 세계를
                구축하고 있으며, 라이브 공연에서 보여주는 에너지와 열정으로
                팬들에게 잊지 못할 경험을 선사합니다
              </div>
            </EventChain>
          </FadeInEffect>
        </div>
      </div>
    </div>
  );
}

export default MainIntroduce;
