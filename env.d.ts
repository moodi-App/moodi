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
  rating: number,
  journal: string,
}

interface postData {
  username: string,
  user_img: string,
  emoji: number,
  rating: number,
  journal: string,
  created_at: string,
  reaction_count: number
}

interface followData{
  username: string,
  user_img: string,
}