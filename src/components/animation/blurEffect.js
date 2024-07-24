import React from "react";
import { useState, useEffect } from "react";
import "../../assets/styles/animation/blurEffect.css";

function BlurEffect() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 3000); // 3초 후에 isHidden 상태를 true로 변경

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
  }, []);

  return (
    <div
      className={`readyBlurEffect ${isVisible ? "Off" : ""}`}
      style={{ display: isHidden ? "none" : "block" }}
    ></div>
  );
}

export default BlurEffect;
