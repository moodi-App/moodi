import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LoginForm.css"
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

  const isFormValid = username !== '' && password !=='';

  return(
    <div className="login-form">
      <p className = "title">log in to your account</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>username</p>
            <input
              id="login-username"
              type="text" 
              placeholder="enter your username" 
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <p>password</p>
            <input
              id="login-password"
              type="text"
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className='button-div'>
          <button id="login-button" type="submit" disabled={!isFormValid}>login</button>
        </div>
      </form>
    </div>
  )
}