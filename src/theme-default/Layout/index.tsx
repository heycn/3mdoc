import { useState } from 'react'

export const Layout: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi</h1>
      <div>
        count: {count}
        <button onClick={() => setCount(count + 1)}>count + 1</button>
      </div>
    </>
  )
}
