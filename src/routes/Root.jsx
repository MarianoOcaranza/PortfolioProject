import { useState } from 'react'
import Menu from '../Menu'
import Home from '../Home'
import About from '../About'

function App() {
  return (
    <div id='top'>
      <Menu />
      <Home />
      <About />
    </div>
  )
}

export default App
