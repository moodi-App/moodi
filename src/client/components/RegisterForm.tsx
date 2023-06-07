import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./RegisterForm.css"
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

  const isFormValid = username !== '' && password !=='';
  
  return(
    <div className="register-form">
      <p className="title">register for a new account</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>email</p>
            <input 
                id="register-email"
                type="text" 
                placeholder="enter your email" 
                onChange={(e) => setEmail(e.target.value)}
              />
          </label>
        </div>
        <div>
          <label>
            <p>username</p>
            <input
              id="register-username"
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
              id="register-password"
              type="text"
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="button-div">
          <button id="register-button" type="submit" disabled={!isFormValid}>register</button>
        </div>
      </form>
    </div>
  )
}