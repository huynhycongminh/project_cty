import React from "react";
import { Avatar } from "@mui/material";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../../../../redux/actions/postAction";
import "./post.scss";

export default function PostNew({
  profilePic,
  username,
  timestamp,
  message,
  image,
}) {
  // const { setLoading, Post, userId } = useSelector(
  //   (state) => ({
  //     setLoading: state.Post.setLoading,
  //     Post: state.Post.Post,
  //     userId: state.user.user_id,
  //   }),
  //   shallowEqual
  // );
  // const dispatch = useDispatch();
  // const myPost = Post && Post.filter((pts) => pts.Post.createdBy === userId );
  // useEffect(() => {
  //   if (setLoading) {
  //     dispatch(fetchPost());
  //   }
  // }, [setLoading,dispatch]);
  return (
 
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="post" />
      </div>
    </div>
  );
}
