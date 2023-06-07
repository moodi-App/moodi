import React from "react";
export default function FollowCard(props: followData){

  const removeFollow = () => {
      
  };

  return(
    <div>
      Follow Card
      <img src={props.user_img}></img>
      <p>{props.username}</p>
      <button onClick={removeFollow}>remove</button>
    </div>
  )
}