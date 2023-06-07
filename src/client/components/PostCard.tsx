import React from "react";
export default function PostCard(props: postData){
  const emojiList = ['😀', '😍', '🎉', '🌟', '🐶', '🍕', '⚽️', '🚀', '🎸', '📚'];
  const {username, user_img, emoji, scale, text, timestamp, reaction} = props
  return(
    <div>
      <span>Post</span>
      <span>{username}</span>
      <img src={user_img}></img>
      <span>{emojiList[emoji]} at intensity {scale}</span>
      <span>{timestamp}</span>
      <span>{reaction} acknowledgements</span>
    </div>
  )
}