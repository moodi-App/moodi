import React, {useState, useContext, useEffect} from "react";
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import { getPostList } from "../api"
import './Feed.css';
import { UserContext } from "./UserContext";
export default function Feed(){
  // need to fetch post data array and map to post card components
  //sample card
  const sample_post = {
    username: 'Eric',
    user_img: 'https://trello.com/1/cards/647eaaf3e02c15a37fa00a77/attachments/647f67fbbac5b0e7ef6e1c29/previews/647f67fcbac5b0e7ef6e1cb1/download/Mooder-round.png',
    emoji: 4,
    scale: 5,
    text: 'The cat meowed softly, seeking warmth.',
    timestamp: '10am',
    reaction: 2
  }

  const [postss, setPosts] = useState<postData[]>([sample_post]);
  const {username} = useContext(UserContext);
  useEffect(()=> {
    getPostList(username)
      .then((list) =>{
        if(list) setPosts(list)
      })
  }, [])
  
  return(
    <div id="feed">
      <PostForm/>
      <PostCard {...sample_post}/>
    </div>
  )
}