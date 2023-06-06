import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function AccountMenu(){
  // const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  return(
    <div>
      Account photo, name, settings, logout, login
      <button>Logout</button>
    </div>
  )
}