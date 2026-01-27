import { useState } from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/Layout/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";
import { ChatAI } from "./components/ChatAI";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />

      <div className="fixed bottom-6 right-6 z-[9999]">
        <ChatAI />
      </div>
    </>
  );
}

export default App;
