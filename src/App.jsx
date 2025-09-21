import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import { ReactLenis } from 'lenis/react'

const App = () => {
  return (
    <>
    <ReactLenis root />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App