import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

function Widget() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets-widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"1296142826988695552"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="TusharS74973897"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "", via: "cleverprogrammer" }}
        />
      </div>
    </div>
  );
}

export default Widget;
