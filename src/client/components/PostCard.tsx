import React from "react";
import './PostCard.css';
import { emojiList } from "../api";
export default function PostCard(props: postData){
  const {username, user_img, emoji, scale, text, timestamp, reaction} = props
  return(
    <div className="post-card">
      <div className="user-info">
        <img className="post-img" src={user_img}></img>
        <span>{username}</span>
      </div>
      <div className="post-content">
        <div className="post-text">
          <span className="emoji">{emojiList[emoji]} x{scale}</span>
          <span>{text}</span>
        </div>
        <div className="stats-div">
          <span>{timestamp}</span>
          <div className="reaction-div">
            <span className="reaction-count">{reaction}</span>
            <button className="react-button">acknowledge</button>
          </div>
        </div>
      </div>
    </div>
  )
}