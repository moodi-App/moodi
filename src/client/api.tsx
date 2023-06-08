import axios from "axios";
import { string } from "prop-types";

export const getPostList = async (username: string): Promise<postData[] | undefined> => {
  try { 
    console.log('querying post list')
    const response = await axios.get(`/api/posts?username=${username}`);
    console.log('got', response)
    return response.data;
  }
  catch (err) {
    console.log('Error in getPostList: ', err);
  }
}


interface postFormData {
  username: string,
  emoji: number,
  scale: number,
  text: string,
}

export const addPost = async (body: postFormData) => {
  try {
    const response = await axios.post('/api/posts', body);
    return response.data;
  }
  catch (err) {
    console.log('Error in addPost: ', err);
  }
}

// export const updatePost = (data: postFormData) => {
  
// }

export const deletePost = async (postID: number) => {
  // doesn't work yet
  try {
    const response = await axios.delete(`/api/posts/${postID}`);
    return response.data;
  }catch(err) {
    console.log('Error in deletePost: ', err);
  }
}
export const addReaction = async (postID: number) => {
  // doesn't work yet
  try {
    const body = {postID};
    const response = await axios.post('/api/posts/', body);
    return response.data;
  }
  catch (err) {
    console.log('Error in addReaction: ', err);
  }
}
export const getFollowList = async (username: string) => {
  try {
    console.log('getting follow list')
    const response = await axios.get(`/api/follows?username=${username}`);
    console.log('follow list:', response.data)
    return response.data;
  }
  catch (err) { console.log('Error in getFollowList: ', err);
};
}
export const addFollow = async (body: followFormData) => {
  try {
    const {follower_name, target_name} = body;
    const response = await axios.post('/api/follows', { follower: follower_name, target: target_name });
    return response.data;
  }
  catch (err) {
    console.log('Error in addFollow: ', err);
  }
}
export const deleteFollow = async (body: followFormData) => {
  // need to use data option on delete
  const {follower_name, target_name} = body;
  try {
    const response = await axios.delete(`/api/follows?follower=${follower_name}&target=${target_name}`);
    return response.data;
  } catch (err) {
    console.log('Error in deleteFollow: ', err);
  }
}


export const addUser = async (body: accountFormData) => {
  try {
    const response = await axios.post('/', body);
    return response.data;
  }
  catch (err) {
    console.log('Error in addUser: ', err);
  }
}
 
export const signIn = async (username: string, password: string) => {
  try {
    const body = {username, password};
    const response = await axios.post('/', body);
    return response.data;
  }
  catch (err) {
    console.log('Error in signIn: ', err);
  }
}

export const signOut = async (username: string) => {
  try {
    const body = {username};
    const response = await axios.post('/', body);
    return response.data;
  }
  catch (err) {
    console.log('Error in signOut: ', err);
  }
}

export const emojiList = [
  '😄', // Joy
  '😢', // Sadness
  '😡', // Anger
  '😍', // Love
  '😱', // Fear
  '😊', // Happiness
  '😔', // Disappointment
  '😃', // Excitement
  '😴', // Sleepiness
  '😒', // Annoyance
]; 
