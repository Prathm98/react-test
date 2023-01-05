import React, { useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0)
  return (
    <>
    <h2>Count - {count}</h2>
    <button onClick={() => setcount(prev => prev + 1)}>Increment</button>
    </>
  )
}

export default Counter