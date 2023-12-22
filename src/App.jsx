import { lazy } from "react"

const App1 = lazy(() => {
  const entryPoint = import.meta.env.PROD ?
    "https://microfe-esm-app-1.pages.dev/entry.js"
    : "http://localhost:3001/App.jsx"

  return import(/* @vite-ignore */entryPoint)
})

const App2 = lazy(() => {
  const entryPoint = import.meta.env.PROD ?
    "https://microfe-esm-app-2.pages.dev/entry.js"
    : "http://localhost:3002/App.jsx"

  return import(/* @vite-ignore */entryPoint)
})

function App() {

  return (
    <div className="p-4 w-full">
      Shell
      <div className="flex gap-4 mt-4 w-full">
        <App1 />
        <App2 />
      </div>
    </div>
  )
}

export default App
