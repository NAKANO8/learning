import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={false} onClick={handleClick}>
        <span>Click Me</span>
      </Button>

    </>
  )
}

export default App
