import React from "react";
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import { getPostList } from "../api"
export default function Feed(){
  // need to fetch post data array and map to post card components
  //sample card
  const sample_post = {
    username: 'Eric',
    user_img: 'https://trello.com/1/cards/647eaaf3e02c15a37fa00a77/attachments/647f67fe58420da644e7c43b/download/Mooder-sq.png',
    emoji: 0,
    scale: 5,
    text: 'Feeling great',
    timestamp: '10am',
    reaction: 2
  }
  return(
    <div>
      Feed
      <PostForm/>
      <PostCard {...sample_post}/>
    </div>
  )
}