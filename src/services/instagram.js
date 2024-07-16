import React, { useEffect, useState } from "react";

const InstagramProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me?fields=id,username&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`
        );
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching Instagram profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Instagram Profile</h1>
      <p>ID: {profile.id}</p>
      <p>Username: {profile.username}</p>
    </div>
  );
};

export default InstagramProfile;
