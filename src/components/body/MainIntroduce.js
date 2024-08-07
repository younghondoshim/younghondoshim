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
    }, 300);
  };
  const handleMainTriggerNext2 = () => {
    setTimeout(() => {
      setmainTriggernext2(true);
    }, 300);
  };
  return (
    <div className="mainIntroduceWrap">
      <div></div>
      <div className="mainIntroduceFlex">
        <div className="mainIntroduceText">
          <FadeInEffect onComplete={handleMainTriggerNext1}>
            <div className="mainIntroduceUpperText">Rethink.</div>

            <EventChain show={mainTriggernext1} timer={0}>
              <div className="mainIntroduceMiddleText mainIntroduceShow1">
                <div>2020년에 을지로에서 시작한 영혼도심은 '서울 도심'에</div>
                <div>위치한 것에 착안하여 Seoul과 Soul 발음의 유사성을</div>
                <div>활용하여 지은 이름입니다.</div>
              </div>
              <div className="mainIntroduceMiddleText mainIntroduceShow2">
                <div>2020년에 을지로에서 시작한 영혼도심은</div>
                <div>'서울 도심'에 위치한 것에 착안하여 Seoul과</div>
                <div>Soul 발음의 유사성을 활용하여 지은 이름입니다.</div>
              </div>
              <div className="mainIntroduceMiddleText mainIntroduceShow3">
                <div>2020년에 을지로에서 시작한 </div>
                <div>영혼도심은 '서울 도심'에 위치한 </div>
                <div>것에 착안하여 Seoul과 Soul 발음의</div>
                <div>유사성을 활용하여 지은 이름입니다.</div>
              </div>
              <div className="mainIntroduceMiddleText mainIntroduceShow4">
                2020년에 을지로에서 시작한 영혼도심은 '서울 도심'에 위치한 것에
                착안하여 Seoul과 Soul 발음의 유사성을 활용하여 지은 이름입니다.
              </div>
            </EventChain>

            <EventChain show={mainTriggernext2} timer={0}>
              <div className="mainIntroduceLowerText mainIntroduceShow1">
                <div>
                  흑인 문화에서 정겨운 음식을 가리킬 때 Soul Food라고 하는 등
                  Soul을 강조하는데, 영혼이 있는 음악을 만들고 싶은 소망을
                  담았습니다.
                </div>
                <div>
                  이레네(RENE)는 영혼도심의 프로듀서로서 미국에서 대학생 시절
                  처음 힙합을 좋아하게 되었고, 비트를 만들기 시작하였습니다.
                </div>
                <div>
                  다양한 장르를 넘나들며 새롭고 신선하지만 울림 있는 그런 음악을
                  만들기 위해 한 걸음씩 나아갑니다.
                </div>
              </div>
              <div className="mainIntroduceLowerText mainIntroduceShow2">
                <div>
                  흑인 문화에서 정겨운 음식을 가리킬 때 Soul Food라고 하는 등
                  Soul을 강조하는데, 영혼이 있는 음악을
                </div>
                <div>
                  만들고 싶은 소망을 담았습니다. 이레네(RENE)는 영혼도심의
                  프로듀서로서 미국에서 대학생 시절 처음 힙합을
                </div>
                <div>
                  좋아하게 되었고, 비트를 만들기 시작하였습니다. 다양한 장르를
                  넘나들며 새롭고 신선하지만 울림 있는
                </div>
                <div>그런 음악을 만들기 위해 한 걸음씩 나아갑니다.</div>
              </div>
              <div className="mainIntroduceLowerText mainIntroduceShow3">
                <div>
                  흑인 문화에서 정겨운 음식을 가리킬 때 Soul Food라고 하는 등
                  Soul을 강조하는데,
                </div>
                <div>
                  영혼이 있는 음악을 만들고 싶은 소망을 담았습니다.
                  이레네(RENE)는 영혼도심의
                </div>
                <div>
                  프로듀서로서 미국에서 대학생 시절 처음 힙합을 좋아하게 되었고,
                  비트를
                </div>
                <div>
                  만들기 시작하였습니다. 다양한 장르를 넘나들며 새롭고
                  신선하지만 울림 있는
                </div>
                <div>그런 음악을 만들기 위해 한 걸음씩 나아갑니다.</div>
              </div>
              <div className="mainIntroduceLowerText mainIntroduceShow4">
                흑인 문화에서 정겨운 음식을 가리킬 때 Soul Food라고 하는 등
                Soul을 강조하는데, 영혼이 있는 음악을 만들고 싶은 소망을
                담았습니다. 이레네(RENE)는 영혼도심의 프로듀서로서 미국에서
                대학생 시절 처음 힙합을 좋아하게 되었고, 비트를 만들기
                시작하였습니다. 다양한 장르를 넘나들며 새롭고 신선하지만 울림
                있는 그런 음악을 만들기 위해 한 걸음씩 나아갑니다.
              </div>
            </EventChain>
          </FadeInEffect>
        </div>
      </div>
    </div>
  );
}

export default MainIntroduce;
