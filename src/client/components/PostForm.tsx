import React, { FormEvent, useState, useRef, useContext } from "react";
import './PostForm.css'
import { UserContext } from "./UserContext";
import { addPost, emojiList} from '../api'
export default function PostForm(){
  

  const [selection, setSelection] = useState(0);
  const scaleInput = useRef(null);
  const textInput = useRef(null)
  const { username } = useContext(UserContext);
  


  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body: postFormData = {
      username, 
      emoji: selection, 
      rating: scaleInput.current?.value,
      journal: textInput.current?.value
    }
    console.log("adding post with body of", body)
    addPost(body)
  }
  return(
    <div>
      <form id="post-form" method="post" onSubmit={handleSubmit}>
      {/* <datalist id="emojiList">
        {emojiList.map((emoji, i) => <option key={`emoji-${i}`} value={emoji}/>)}
      </datalist> */}
      <div id="emoji-buttons">
        {emojiList.map((emoji, index) => (
          <button
            className="emoji-button"
            key={emoji}
            onClick={() => setSelection(index)}
            style={{ backgroundColor: selection === index ? 'yellow' : 'white' }}
            type="button"
          >
            {emoji}
          </button>
        ))}
      </div>
      <div id="post-inputs">
        <p>intensity</p>
        <input ref={scaleInput} id="scale" type="number" defaultValue={5} min={1} max={10} />
        <input
          id="message-input"
          name="postContent"
          placeholder="because of"
          maxLength = {50}
          size={50}
          ref={textInput}
        />
        <button type="submit">emote</button>
      </div>
    </form>
    </div>
    
  )
}