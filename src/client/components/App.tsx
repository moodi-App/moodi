import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import { UserContext } from './UserContext';
export default function App(){
  const [username, setUsername] = useState('Mooder');
  return (
    <div>
      <UserContext.Provider value={{username, setUsername}}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </UserContext.Provider>
    </div>
  )
}