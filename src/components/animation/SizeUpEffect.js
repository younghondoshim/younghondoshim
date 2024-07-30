import React, { useEffect, useState } from "react";
import "../../assets/styles/animation/SizeUpEffect.css"; // CSS 파일을 따로 만듭니다.

const SizeUpEffect = ({ children, onComplete }) => {
  const [isSizeUp, setIsSizeUp] = useState(false);

  useEffect(() => {
    setIsSizeUp(true); // 컴포넌트가 마운트될 때 isSizeUp 상태를 true로 변경

    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  return (
    <div className={`Size-Up-section ${isSizeUp ? "is-Size-Up" : ""}`}>
      {children}
    </div>
  );
};

export default SizeUpEffect;
