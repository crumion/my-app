import React from "react";
import { Profile } from "../../Services/Profile.js";

//You get the idea, these are each individual components making use of one service at a time
export const ProfileComp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Profile</h2>
        <Profile />
      </header>
    </div>
  );
};

export default ProfileComp;
