"use client"

import { useState } from "react"

export default function ClientComponent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Client Component</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
