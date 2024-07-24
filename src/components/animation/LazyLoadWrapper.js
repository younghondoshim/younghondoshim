import React from "react";
import useInView from "./UseInView.js";

const LazyLoadWrapper = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });

  return <div ref={ref}>{inView ? children : ""}</div>;
};

export default LazyLoadWrapper;