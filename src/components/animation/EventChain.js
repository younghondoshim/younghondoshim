import React, { useState, useEffect } from "react";
import "../../assets/styles/animation/FadeInEffect.css";
const EventChain = ({ show, children, timer = 1000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout;
    if (show) {
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, timer);
    } else {
      setIsVisible(false);
    }
    return () => clearTimeout(timeout);
  }, [show, timer]);

  return (
    <div className={`fade-in-section${isVisible ? "Is-visible" : ""}`}>
      {children}
    </div>
  );
};

export default EventChain;
