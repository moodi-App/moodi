import React from "react";
export default function FollowCard(props: {username: string}){

  const removeFollow = () => {
      
  };

  return(
    <div>
      Follow Card
      <p>{props.username}</p>
      <button onClick={removeFollow}>remove</button>
    </div>
  )
}