import React from "react"

import Home from "./Home.jsx"
import Levels from "./Levels"
import { BrowserRouter,Routes,Route } from "react-router-dom"



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stages" element={<Home />}></Route>
        <Route path="/stages/levels" element={<Levels />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
