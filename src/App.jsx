import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About' 
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import './index.css'

function App() {
  return (
    // We set the core colors and background here globally.
    // bg-zinc-950 is a very dark gray close to the reference.
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App;