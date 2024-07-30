import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../../assets/styles/animation/FadeInEffect.css"; // CSS 파일을 따로 만듭니다.

const FadeInEffect = ({ children, onComplete }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 한 번 트리거된 후 다시 트리거되지 않음
    threshold: 0.4, // 요소의 40%가 뷰포트에 보이면 트리거
  });
  useEffect(() => {
    console.log(inView);
    if (inView && onComplete) {
      onComplete();
    }
  }, [inView, onComplete]);
  return (
    <div className={`fade-in-section ${inView ? "is-visible" : ""}`} ref={ref}>
      {children}
    </div>
  );
};

export default FadeInEffect;
