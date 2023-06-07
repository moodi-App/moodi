import React, {useState} from "react";
import FollowCard from "./FollowCard";
import FollowForm from "./FollowForm";
import axios from "axios";

export default function FollowList(){
  const [follows, setFollows] = useState([]);

  const addFollow = (newFollow: string) => {
    axios.post('https://localhost:3000/endpoint',
    {
      username: newFollow
    }
    )
    .then(response => {
      setFollows(prevFollows => [...prevFollows, response.data]);
    })
    .catch(error => {
      console.error('Error in addFollow: ', error);
    });
  };

  return(
    <div>
      Follow List
      {follows.map(follow => (
        <FollowCard key={follow.id} username={follow.username}/>
      ))}
      <FollowForm addFollow={addFollow} />
    </div>
  )
}