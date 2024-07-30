import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../../assets/styles/animation/lazyLoadWrapper.css";

const LazyLoadWrapper = ({ children, onComplete }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9, // 요소의 90%가 뷰포트에 보이면 트리거
  });

  useEffect(() => {
    console.log(inView);
    if (inView && onComplete) {
      onComplete();
    }
  }, [inView, onComplete]);

  return (
    <div className="lazyLoadWrapperHeight" ref={ref}>
      {inView && children}
    </div>
  );
};

export default LazyLoadWrapper;
