import React from "react";
import { useInView } from "react-intersection-observer";
import "../../assets/styles/animation/FadeInEffect.css"; // CSS 파일을 따로 만듭니다.

const FadeInEffect = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 한 번 트리거된 후 다시 트리거되지 않음
    threshold: 0.3, // 요소의 10%가 뷰포트에 보이면 트리거
  });

  return (
    <div className={`fade-in-section ${inView ? "is-visible" : ""}`} ref={ref}>
      {props.children}
    </div>
  );
};

export default FadeInEffect;
