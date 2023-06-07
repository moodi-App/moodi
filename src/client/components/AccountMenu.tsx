import React from "react";
import { useNavigate } from "react-router-dom";
export default function AccountMenu(){
  const navigate = useNavigate();
  return(
    <div>
      Account photo, name, settings, logout, login
      <button onClick={()=> navigate('/login')}>Login</button>
    </div>
  )
}