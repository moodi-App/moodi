interface accountFormData {
  username: string,
  password: string,
  email: string,
}

interface followFormData {
  follower_name: string,
  target_name: string
}

interface postFormData {
  username: string,
  emoji: number,
  scale: number,
  text: string,
}

interface postData {
  username: string,
  user_img: string,
  emoji: number,
  scale: number,
  text: string,
  timestamp: string,
  reaction: number
}

interface followData{
  username: string,
  user_img: string,
}