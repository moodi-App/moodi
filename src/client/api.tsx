import axios from "axios";
import { string } from "prop-types";

export const getPostList = async (username: string): Promise<postData[] | undefined> => {
  try { 
    const response = await axios.get(`/${username}`);
    return response.data;
  }
  catch (err) {
    console.log('Error in getPostList: ', err);
  }
}

export const addPost = async (body: postFormData) => {
  try {
    const response = await axios.post('/', body);
    return response.data;
  }
  catch (err) {
    console.log('Error in addPost: ', err);
  }
}

// export const updatePost = (data: postFormData) => {
  
// }

export const deletePost = async (postID: number) => {
  try {
    const response = await axios.delete('/', {data: {postID}});
    return response.data;
  }catch(err) {
    console.log('Error in deletePost: ', err);
  }
}
export const addReaction = async (postID: number) => {
  try {
    const body = {postID};
    const response = await axios.post('/', body);
    return response.data;
  }
  catch (err) {
    console.log('Error in addReaction: ', err);
  }
}
export const getFollowList = async (username: string) => {
  try {
    const response = await axios.get(`/${username}`);
    return response.data;
  }
  catch (err) { console.log('Error in getFollowList: ', err);
};
}
export const addFollow = async (body: followFormData) => {
  try {
    const response = await axios.post('/', body);
    return response.data;
  }
  catch (err) {
    console.log('Error in addFollow: ', err);
  }
}
export const deleteFollow = async (body: followFormData) => {
  // need to use data option on delete
  try {
    const response = await axios.delete('/', {data: body});
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
