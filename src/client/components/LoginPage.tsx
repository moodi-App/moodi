import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import "./LoginPage.css"
export default function LoginPage(){
  return(
    <div className="login-page">
      <LoginForm/>
      <RegisterForm/>
    </div>
  )
}