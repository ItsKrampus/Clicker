import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <Clicker message="HI!!!!" buttonText="Click Me!" />
      <Clicker message="Please Stop Clicking Me!!!!" buttonText="Do not click" />


    </div>
  )
}

export default App
