import React from "react";
import AccountMenu from "./AccountMenu";
import Feed from "./Feed";
import PostForm from "./PostForm";
import FollowList from "./FollowList";
import './MainPage.css'
export default function MainPage(){
  return (
    <div className="main-page">
      <div id="heading">
        <h1 id="main-heading">moodi</h1>
        <h4 id="subheading">where moods are mandatory</h4>
      </div>
      <AccountMenu/>
      <Feed/>
      <FollowList/>
    </div>
  )
}