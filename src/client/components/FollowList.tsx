import React, {useState, useEffect} from "react";
import FollowCard from "./FollowCard";
import FollowForm from "./FollowForm";
import { getFollowList } from "../api";
import './FollowList.css'

export default function FollowList() {
  const [followList, setFollows] = useState<followData[]>([]);
  useEffect(() => {
    getFollowList(0)
      .then((list)=> {
        if(list) setFollows(list)
      })
      
  },[])
  return(
    <div id="follow-list">
      Follow List
      {followList.map((follow, i) => (
        <FollowCard key={i} {...follow}/>
      ))}
      <FollowForm/>
    </div>
  )
}