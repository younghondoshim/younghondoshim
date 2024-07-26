import React, { useEffect, useState } from "react";

const MainCallToActionTextTypingAni = ({
  text,
  onComplete,
  duration = 0,
  startDelay = 0,
}) => {
  const [mainSequence, setMainSequence] = useState("");
  const [mainTextCount, setMainTextCount] = useState(0);
  const [mainIsTypingPaused, setMainIsTypingPaused] = useState(false);

  useEffect(() => {
    // Simulate typing effect and call onComplete when done
    const timeout = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, duration); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, [duration, onComplete]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setMainIsTypingPaused(true);
    }, startDelay);

    return () => clearTimeout(startTimeout); // 클린업 함수에서 타이머 정리
  }, [startDelay]);
  useEffect(() => {
    if (mainIsTypingPaused) {
      const pauseTimeout = setTimeout(() => {
        setMainIsTypingPaused(false);
      }, 750); // 몇 초 일시정지할 것인지

      return () => clearTimeout(pauseTimeout); // 클린업 함수에서 타이머 정리
    }

    const typingInterval = setInterval(() => {
      if (mainTextCount >= text.length) {
        setMainIsTypingPaused(true);
        clearInterval(typingInterval);
        return;
      }

      const nextChar = text[mainTextCount];
      setMainSequence((prevMainSequence) => prevMainSequence + nextChar);
      if (nextChar === "\n") {
        setMainTextCount((prevCount) => prevCount + 2);
      } else {
        setMainTextCount((prevCount) => prevCount + 1);
      }
    }, 50); // 설정한 초만큼 일정한 간격마다 실행된다

    return () => clearInterval(typingInterval); // 컴포넌트가 마운트 해제되거나, 재렌더링 될 때마다 setInterval를 정리하는 함수를 반환함.
  }, [text, mainTextCount, mainIsTypingPaused]); // 해당 상태들이 변경될 때마다 useEffect가 다시 실행 됨

  return <div>{mainSequence}</div>;
};

export default MainCallToActionTextTypingAni;
