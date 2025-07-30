import { useState } from 'react'
import { Button } from "./components/ui/button"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p className="font-arimoB text-navy">This uses Arimo regular</p>
    </>
  )
}

export default App
