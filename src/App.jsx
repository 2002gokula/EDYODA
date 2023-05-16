import React, { lazy, Suspense } from "react"
import "./App.css"

const Header = lazy(() => import("./component/Header"))
const Hero = lazy(() => import("./component/Hero"))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Hero />
      </Suspense>
    </div>
  )
}

export default App
