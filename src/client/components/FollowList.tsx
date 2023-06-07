import React, {useState, useEffect, useContext} from "react";
import FollowCard from "./FollowCard";
import FollowForm from "./FollowForm";
import { getFollowList } from "../api";
import './FollowList.css'

import { UserContext } from "./UserContext";

export default function FollowList() {
  const {username} = useContext(UserContext)
  const [followList, setFollows] = useState<followData[]>([{user_img: 'https://trello.com/1/cards/647eaaf3e02c15a37fa00a77/attachments/647f67fbbac5b0e7ef6e1c29/download/Mooder-round.png', username: 'Mooder'}]);
  useEffect(() => {
    getFollowList(username)
      .then((list)=> {
        if(list) setFollows(list)
      })
      
  },[])
  return(
    <div id="follow-list">
      <div id='follow-list-top'>
        <p id='followlist-header'>following</p>
        {followList.map((follow, i) => (
          <FollowCard key={i} {...follow}/>
        ))}
      </div>
      <FollowForm/>
    </div>
  )
}