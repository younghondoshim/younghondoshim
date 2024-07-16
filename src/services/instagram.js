import React, { useEffect, useRef } from "react";
import Instafeed from "instafeed.js";

const InstagramFeed = () => {
  const instafeedRef = useRef(null);

  useEffect(() => {
    const feed = new Instafeed({
      accessToken: "YOUR_ACCESS_TOKEN",
      limit: 8,
      template:
        '<div class="instafeed-item"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}" /></a></div>',
      target: instafeedRef.current,
    });
    feed.run();
  }, []);

  return (
    <div>
      <div id="instafeed" ref={instafeedRef}></div>
    </div>
  );
};
export default InstagramFeed;
