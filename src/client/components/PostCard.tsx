import React from "react";
import './PostCard.css';
import { emojiList } from "../api";
export default function PostCard(props: postData){
  const {username, user_img, emoji, rating, journal, created_at, reaction_count} = props
  return(
    <div className="post-card">
      <div className="user-info">
        <img className="post-img" src={user_img}></img>
        <span>{username}</span>
      </div>
      <div className="post-content">
        <div className="post-text">
          <span className="emoji">{emojiList[emoji]} x{rating}</span>
          <span>{journal}</span>
        </div>
        <div className="stats-div">
          <span>{created_at}</span>
          <div className="reaction-div">
            <span className="reaction-count">{reaction_count ? reaction_count : 0}</span>
            <button className="react-button">acknowledge</button>
          </div>
        </div>
      </div>
    </div>
  )
}