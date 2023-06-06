import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function AccountMenu(){
  // const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  if (!avatar && !username) {
    setAvatar('https://trello.com/1/cards/647eaaf3e02c15a37fa00a77/attachments/647f67fbbac5b0e7ef6e1c29/download/Mooder-round.png')
    setUsername('Mooder')
  }
  return(
    <div>
      Account photo, name, settings, logout
      <img src={avatar}></img>
      <p>{username}</p>
      <button>Logout</button>
    </div>
  )
}