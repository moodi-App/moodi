import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function LoginForm(){
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // check db for username and password
    // error message if account is not found
    navigate('/');
  }

  return(
    <div>
      Login to your account
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>Username</p>
            <input
              id="login-username"
              type="text" 
              placeholder="Enter your username" 
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <p>Password</p>
            <input
              id="login-password"
              type="text"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button id="login-button" type="submit">Login</button>
      </form>
    </div>
  )
}