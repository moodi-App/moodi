import React from "react";
import AccountMenu from "./AccountMenu";
import Feed from "./Feed";
import PostForm from "./PostForm";
import FollowList from "./FollowList";
export default function MainPage(){
  return (
    <div>
      Main Page
      <AccountMenu/>
      <Feed/>
      <FollowList/>
    </div>
  )
}