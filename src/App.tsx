import { useState } from "react"

import DefaultScreen from "./components/DefaultScreen"

function App() {
  const [isGameActive, setIsGameActive] = useState(false)

  if (!isGameActive) {
    return <DefaultScreen toggleActive={setIsGameActive}/>
  }

  return (
    <>
      <h1>uuuur</h1>
    </>
  ) 
}

export default App
