import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramProfile = () => {
  const [posts, setPosts] = useState([]);
  const accessToken =
    "EABmvb1CnEXABOw5jcaUZAZAZBSy2eVxWyJZArmrWMJJDEUuP1BaQJNHuCFfaZCz6E8DDu26j66r1oJmyngFIhJj2ltZC4IDhRMmSZBim1dKiL7l0lDZB0u59600cMZAfUZBv2XQoJKrKgWgFavz55IcbQaKqX4IEqNHz1WB3Ga3EpG7fDawu9RYD52cJWfYQbJYLIN";
  const userId = "1042412157302694"; // 실제 User ID로 대체

  useEffect(() => {
    const apiUrl = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`;
    console.log(apiUrl); // 디버깅 코드 추가
    axios
      .get(apiUrl)
      .then((response) => {
        setPosts(response.data.data.slice(0, 8));
      })
      .catch((error) => {
        console.error(
          "Error fetching Instagram posts:",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {posts.map((post) => (
          <div key={post.id} style={{ width: "100px", height: "100px" }}>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img
                src={post.media_url}
                alt={post.caption}
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InstagramProfile;
