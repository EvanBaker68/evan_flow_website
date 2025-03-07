import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Section Components
import About from './components/sections/About'
import Gallery from './components/sections/Gallery'
import Music from './components/sections/Music'
import Contact from './components/sections/Contact'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header scrollY={scrollY} />
      
      <main className="flex-grow">
        <About />
        <Gallery />
        <Music />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
