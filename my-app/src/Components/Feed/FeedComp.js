import React from "react";
import { Feed } from "../../Services/Feed.js";

//This component uses <Feed/> from Feed.js and gives the page a header of Feed.
export const FeedComp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Feed</h2>
        <Feed />
      </header>
    </div>
  );
};

export default FeedComp;
