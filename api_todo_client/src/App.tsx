import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='dark:bg-gray-900 min-block-screen text-center justify-items-center'>
     <h1 className='text-4xl text-amber-500' text-center>API TODO client</h1>
    </div>
    </>
  )
}

export default App
