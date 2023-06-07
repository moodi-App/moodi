import React from "react";
import { useNavigate } from "react-router-dom";
export default function LoginForm(){
  const navigate = useNavigate();
  return(
    <div>
      Login to your account
      <button onClick={()=> navigate('/')}>Home</button>
    </div>
  )
}