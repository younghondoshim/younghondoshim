import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramProfile = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // API 호출: 미디어 정보 가져오기
        const mediaResponse = await axios.get(
          `https://graph.instagram.com/${process.env.REACT_APP_INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`
        );
        setMedia(mediaResponse.data.data);
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      {media.map((item) => (
        <div key={item.id}>
          <p>{item.caption}</p>
          {item.media_type === "IMAGE" && (
            <img src={item.media_url} alt={item.caption} width="300" />
          )}
          {item.media_type === "VIDEO" && (
            <video controls width="300">
              <source src={item.media_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </div>
  );
};

export default InstagramProfile;
