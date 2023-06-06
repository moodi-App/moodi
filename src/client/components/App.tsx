import React from "react";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
export default function App(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}