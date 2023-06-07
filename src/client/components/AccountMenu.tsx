import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './AccountMenu.css';
export default function AccountMenu(){
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  if (!avatar && !username) {
    setAvatar('https://trello.com/1/cards/647eaaf3e02c15a37fa00a77/attachments/647f67fbbac5b0e7ef6e1c29/download/Mooder-round.png')
    setUsername('Mooder')
  }
  // where should logout button redirect to?
  // empty feed and default avatar/name?
  return(
    <div id="account-menu">
      <div id="acct-info">
        <img id="avatar" src={avatar}></img>
        <div id="acct-text">
          <h3>{username}</h3>
          <button onClick={()=> navigate('/login')}>Logout</button>
        </div>
      </div>
      
      
    </div>
  )
}