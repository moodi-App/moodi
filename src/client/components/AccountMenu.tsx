import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import './AccountMenu.css';
import { UserContext } from "./UserContext";
export default function AccountMenu(){
  const navigate = useNavigate();
  const {username} = useContext(UserContext)
  const [avatar, setAvatar] = useState('');
  if (!avatar) {
    setAvatar('https://trello.com/1/cards/647eaaf3e02c15a37fa00a77/attachments/647f67fbbac5b0e7ef6e1c29/download/Mooder-round.png')
  }
  // where should logout button redirect to?
  // empty feed and default avatar/name?
  return(
    <div id="account-menu">
      <div id="acct-info">
        <img id="avatar" src={avatar}></img>
        <div id="acct-text">
          <h3 id="username">{username ? username : 'Login Needed'}</h3>
          <button id="logout" onClick={()=> navigate('/login')}>logout</button>
        </div>
      </div>
      
      
    </div>
  )
}