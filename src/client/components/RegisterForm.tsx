import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function RegisterForm(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // add user to db with email, username, and password
    // indicate account was created before navigating to main page?
    navigate('/');
  }
  
  return(
    <div>
      Register for a new account
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>Email</p>
            <input 
                id="register-email"
                type="text" 
                placeholder="Enter your email" 
                onChange={(e) => setEmail(e.target.value)}
              />
          </label>
        </div>
        <div>
          <label>
            <p>Username</p>
            <input
              id="register-username"
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
              id="register-password"
              type="text"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button id="register-button" type="submit">Register</button>
      </form>
    </div>
  )
}