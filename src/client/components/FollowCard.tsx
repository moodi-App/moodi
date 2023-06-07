import React from "react";
import './FollowCard.css';

export default function FollowCard(props: followData){

  const removeFollow = () => {
      
  };

  return(
    <div id='follow-card'>
      <img id='follow-img' src={props.user_img}></img>
      <p id='follow-name'>{props.username}</p>
      <button id='remove-button' onClick={removeFollow}>remove</button>
    </div>
  )
}