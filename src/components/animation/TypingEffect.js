import React, { useEffect, useState } from "react";

const TextTypingAni = ({ text, startDelay = 0 }) => {
  const [sequence, setSequence] = useState("");
  const [textCount, setTextCount] = useState(0);
  const [isTypingPaused, setIsTypingPaused] = useState(false);
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTypingPaused(true);
    }, startDelay);

    return () => clearTimeout(startTimeout); // 클린업 함수에서 타이머 정리
  }, [startDelay]);
  useEffect(() => {
    if (isTypingPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsTypingPaused(false);
      }, 560); // 몇 초 일시정지할 것인지

      return () => clearTimeout(pauseTimeout); // 클린업 함수에서 타이머 정리
    }

    const typingInterval = setInterval(() => {
      if (textCount >= text.length) {
        setIsTypingPaused(true);
        clearInterval(typingInterval);
        return;
      }

      const nextChar = text[textCount];
      setSequence((prevSequence) => prevSequence + nextChar);
      if (nextChar === "\n") {
        setTextCount((prevCount) => prevCount + 2);
      } else {
        setTextCount((prevCount) => prevCount + 1);
      }
    }, 35); // 설정한 초만큼 일정한 간격마다 실행된다

    return () => clearInterval(typingInterval); // 컴포넌트가 마운트 해제되거나, 재렌더링 될 때마다 setInterval를 정리하는 함수를 반환함.
  }, [text, textCount, isTypingPaused]); // 해당 상태들이 변경될 때마다 useEffect가 다시 실행 됨

  return <div>{sequence}</div>;
};

export default TextTypingAni;
