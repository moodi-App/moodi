import React, { useState, FormEvent } from "react";

type FollowFormProps = {
  addFollow: (username: string) => void;
};
 

export default function FollowForm({addFollow}: FollowFormProps){

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget as HTMLFormElement;
    const username = form.elements.namedItem("username") as HTMLInputElement;
    addFollow(username.value);
    form.reset();
  }

  return(
    <div>
      Follow Form here
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter username" name="username"/>
        <button type="submit">ADD</button>
      </form>
    </div>
  )
}