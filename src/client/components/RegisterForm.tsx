import React from "react";
import { useNavigate } from "react-router-dom";
export default function RegisterForm(){
  const navigate = useNavigate();
  return(
    <div>
      Register for an account here
      <button onClick={()=> navigate('/')}>Register</button>
    </div>
  )
}