import React, { FormEvent } from "react";
import './PostForm.css'
export default function PostForm(){
  const emojiList = ['😀', '😍', '🎉', '🌟', '🐶', '🍕', '⚽️', '🚀', '🎸', '📚'];
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

  }
  return(
    <div id="post-form">
      <form method="post" onSubmit={handleSubmit}>
      
      <input id="emoji-input" list="emojiList"  name="emoji" size={6}/>
      at intensity
      <input id="scale" type="number" defaultValue={5} min={1} max={10} />
      <datalist id="emojiList">
        {emojiList.map((emoji, i) => <option key={`emoji-${i}`} value={emoji}/>)}
      </datalist>
      <input
        id="message-input"
        name="postContent"
        placeholder="because of"
        maxLength = {50}
        size={50}
        // rows={1}
        // cols={50}
      />
      <button type="submit">emote</button>
    </form>
    </div>
    
  )
}