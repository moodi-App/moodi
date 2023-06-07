import React from "react";
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import { getPostList } from "../api"
export default function Feed(){
  
  return(
    <div>
      Feed
      <PostForm/>
      <PostCard/>
    </div>
  )
}