import React from "react";
import MessageSender from "../messageSender/MessageSender.component";
import StoryList from "../story/StoryList.component";
import PostNew from "../post/PostNew.component";
import { useEffect, useState } from "react";
import baseDb from "../../../../../data/index";
import "./Feed.scss";

export default function Feed() {
  const [post, setPost] = useState([]);
  const [story, setStory] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    baseDb
      .collection("Post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPost(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  });
  useEffect(() => {
    baseDb
      .collection("Story")
      .onSnapshot((snapshot) =>
        setStory(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  });
  useEffect(() => {
    baseDb
      .collection("User")
      .onSnapshot((snapshot) =>
      setUser(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  });



  return (

    <div className="feed">
    <div className="top">
    {story.map((Story) => (
        <StoryList
          key={Story.id}
          avatar_story={Story.data.avatar_story}
          image_story={Story.data.image_story}
          name_story={Story.data.name_story}
        />
      ))}
    </div>
    <div className="middle">
    {user.map((User) => (
        <MessageSender
          key={User.id}
          image_user={User.data.image_user}
          name_user={User.data.name_user}
        />
      ))}
    </div>
    <div className="bottom">
    {post.map((Post) => (
        <PostNew
          key={Post.id}
          profilePic={Post.data.profilePic}
          message={Post.data.message}
          timestamp={Post.data.timestamp}
          username={Post.data.username}
          image={Post.data.image}
        />
      ))}

    </div>
  
  
    
      {/* <PostNew/> */}
    </div>
  );
}
