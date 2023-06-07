import React from "react";
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import { getPostList } from "../api"
import './Feed.css';
export default function Feed(){
  // need to fetch post data array and map to post card components
  //sample card
  const sample_post = {
    username: 'Eric',
    user_img: 'https://trello.com/1/cards/647eaaf3e02c15a37fa00a77/attachments/647f67fbbac5b0e7ef6e1c29/previews/647f67fcbac5b0e7ef6e1cb1/download/Mooder-round.png',
    emoji: 0,
    scale: 5,
    text: 'Feeling great',
    timestamp: '10am',
    reaction: 2
  }
  return(
    <div id="feed">
      Feed
      <PostForm/>
      <PostCard {...sample_post}/>
    </div>
  )
}