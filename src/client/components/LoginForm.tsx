import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function LoginForm(){
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // add user to db with username and password
  }
  

  return(
    <div>
      Login to your account
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input 
            type="text" 
            placeholder="enter a username" 
            onChange={(e) => {
              setUsername(e.target.value);
            }}/>
        </label>
        <label>
          password:
          <input 
          type="text"
          placeholder="enter a password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}/>
        </label>
        <button type="submit">Login</button>
        {/* <button type="submit" onClick={()=> navigate('/')}>Login</button> */}
      </form>
    </div>
  )
}