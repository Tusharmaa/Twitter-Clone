import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post.js";
import TweetBox from "./TweetBox.js";
import FlareIcon from "@material-ui/icons/Flare";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    ); //Gives an array of all the posts inside a database.
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed-header">
        <h2>Home</h2>
        <FlareIcon />
      </div>
      {/* Tweet Box */}

      <TweetBox />
      {/* First step was to add the forwardref in  the post.js file */}
      {/* flipmove is an animation library */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
