import { createContext } from 'react';

type UserContextType = {
  username: string | null,
  setUsername: React.Dispatch<React.SetStateAction<string | null>>
}

export const UserContext = createContext<UserContextType>({username: 'mooder', setUsername: ()=>{}});