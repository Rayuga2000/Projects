import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Intro from './Intro.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Intro />
    <Skills />
    <Projects />
    <Contact />
  </StrictMode>
)
