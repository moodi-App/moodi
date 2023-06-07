import React from "react";
import './PostCard.css'
export default function PostCard(props: postData){
  const emojiList = ['😀', '😍', '🎉', '🌟', '🐶', '🍕', '⚽️', '🚀', '🎸', '📚'];
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
          <span>{timestamp}</span>
        </div>
        <span>{reaction} acknowledgements</span>
      </div>
    </div>
  )
}