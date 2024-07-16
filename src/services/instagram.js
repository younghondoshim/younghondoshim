import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramProfile = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await axios.get(`
            https://graph.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}
            `);
      return data;
      //   try {
      //     // API 호출: 미디어 정보 가져오기
      //     const mediaResponse = await axios.get(
      //       `https://graph.instagram.com/${process.env.REACT_APP_INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`
      //     );
      //     setMedia(mediaResponse.data.data);
      //   } catch (error) {
      //     console.error("Error fetching Instagram data:", error);
      //   }
    };

    fetchProfile();
  }, []);

  return <div></div>;
};

export default InstagramProfile;
