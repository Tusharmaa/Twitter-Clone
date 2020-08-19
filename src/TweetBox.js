import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import EventIcon from "@material-ui/icons/Event";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Tushar Sharma",
      username: "tusharma",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://lh4.googleusercontent.com/-SLmQYe01MhM/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckw_Yn9eHvcvio3IXL8HN3_oo0e3w/s88-c-k-c0x00ffffff-no-rj-mo/photo.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar
            className="tweetBox-avatar"
            src="https://lh4.googleusercontent.com/-SLmQYe01MhM/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckw_Yn9eHvcvio3IXL8HN3_oo0e3w/s88-c-k-c0x00ffffff-no-rj-mo/photo.jpg"
          />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="Whats's happening?"
            type="text"
          />
          {/* <input placeholder="Enter image URL" type="text" /> */}
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox-imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <div className="tweetBox-headerFooter">
          <div className="tweetBox-tweetIcons">
            <div className="tweetBox-tweetSingleIcon">
              <PhotoIcon />
            </div>
            <div className="tweetBox-tweetSingleIcon">
              <GifIcon />
            </div>
            <div className="tweetBox-tweetSingleIcon">
              <EmojiEmotionsIcon />
            </div>
            <div className="tweetBox-tweetSingleIcon">
              <EventIcon />{" "}
            </div>
          </div>
          <Button onClick={sendTweet} className="tweetBox-tweetButton">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
