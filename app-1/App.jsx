import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="border border-red-800 p-4 w-full flex flex-col gap-3 rounded">
      App 1
      <button
        className="w-20"
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Counter {counter}
      </button>
    </div>
  )
}

export default App
