import { useState } from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/Layout/Navbar";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>
      
    </>
  );
}

export default App;
