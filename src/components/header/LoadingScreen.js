import React, { useState, useEffect } from "react";
import "../../assets/styles/header/LoadingScreen.css";
import { motion, AnimatePresence } from "framer-motion";

function LoadingScreen({ onUnmount }) {
  const [animationCompleted1, setAnimationCompleted1] = useState(false);
  const [animationCompleted2, setAnimationCompleted2] = useState(false);
  const [animationCompleted3, setAnimationCompleted3] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationCompleted1(true);
    }, 1800);
  }, []);
  useEffect(() => {
    if (animationCompleted1) {
      const timer = setTimeout(() => {
        setAnimationCompleted2(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [animationCompleted1]);

  useEffect(() => {
    if (animationCompleted2) {
      const timer = setTimeout(() => {
        setAnimationCompleted3(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [animationCompleted2]);
  useEffect(() => {
    if (animationCompleted3) {
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 800); // 1초 후 페이드 아웃 시작
      return () => clearTimeout(timer);
    }
  }, [animationCompleted3]);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        if (onUnmount) {
          onUnmount();
        }
      }, 1000); // 페이드 아웃 후 1초 뒤에 언마운트
      return () => clearTimeout(timer);
    }
  }, [fadeOut, onUnmount]);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className="loadingWrap"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div></div>
          <div className="loadingTextAreaWidth">
            <motion.div
              style={{
                height: "100%",
                backgroundColor: "#04260c",
              }}
              initial={{ width: "0%", x: 0, opacity: 1 }}
              animate={{
                width: ["0%", "100%", "100%", "100%", "100%"],
                x: ["0%", "0%", "0%", "100%", "100%"],
                opacity: [1, 1, 1, 1, 0],
              }}
              transition={{
                ease: "linear",
                duration: 3,
                times: [0, 0.6, 0.8, 0.9, 1],
              }}
            />
            <div className="loadingTextAreaWrap">
              <div className="loadingTextWrap1">
                {animationCompleted1 && (
                  <div className="loadingText textLine1">
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: [0, 0.5, 1], y: [0, -25, -20] }}
                      transition={{ duration: 0.5, times: [0, 0.5, 1] }}
                      onAnimationComplete={() => setAnimationCompleted2(true)}
                    >
                      Welcome
                    </motion.div>
                  </div>
                )}
              </div>
              <div className="loadingTextWrap2">
                {animationCompleted2 && (
                  <div className="loadingText textLine2">
                    <motion.div
                      initial={{ opacity: 0, y: 0, x: 140 }}
                      animate={{ opacity: [0, 0.5, 1], y: [0, -25, -20] }}
                      transition={{ duration: 0.5, times: [0, 0.5, 1] }}
                      onAnimationComplete={() => setAnimationCompleted3(true)}
                    >
                      To
                    </motion.div>
                  </div>
                )}
              </div>
              <div className="loadingTextWrap3">
                {animationCompleted3 && (
                  <div className="loadingText textLine3">
                    <motion.div
                      initial={{ opacity: 0, y: 0, x: 190 }}
                      animate={{
                        opacity: [0, 0.5, 1],
                        y: [0, -25, -20],
                      }}
                      transition={{ duration: 0.5, times: [0, 0.5, 1] }}
                    >
                      Younghondoshim
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
