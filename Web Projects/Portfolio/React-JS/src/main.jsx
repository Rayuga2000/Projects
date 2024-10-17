import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Intro from './Intro.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Card from './Card.jsx'
import './sass/index.scss'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Intro />
    <Skills />
    <Projects />
    <Card />
  </StrictMode>
)
