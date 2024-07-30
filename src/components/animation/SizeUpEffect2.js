import React, { useEffect, useState } from "react";
import "../../assets/styles/animation/SizeUpEffect2.css"; // CSS 파일을 따로 만듭니다.

const SizeUpEffect = ({ children, onComplete }) => {
  const [isSizeUp2, setIsSizeUp] = useState(false);

  useEffect(() => {
    setIsSizeUp(true); // 컴포넌트가 마운트될 때 isSizeUp 상태를 true로 변경

    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  return (
    <div className={`Size-Up-section2 ${isSizeUp2 ? "is-Size-Up2" : ""}`}>
      {children}
    </div>
  );
};

export default SizeUpEffect;
