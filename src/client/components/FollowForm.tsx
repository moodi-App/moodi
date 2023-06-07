import React, { useState, FormEvent , useRef} from "react";
import { addFollow } from "../api";


export default function FollowForm(){
  const target_name = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // addFollow({follower_name: 'eric', target_name: formData.username})
    console.log(target_name.current?.value);

  }

  return(
    <div>
      Follow Form here
      <form  onSubmit={handleSubmit}>
        <input ref={target_name} type="text" placeholder="Enter username" name="username"/>
        <button type="submit">ADD</button>
      </form>
    </div>
  )
}