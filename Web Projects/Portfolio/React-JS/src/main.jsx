import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Intro from './Intro.jsx'
// import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import './sass/index.scss'

const root=createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Intro />
    <Projects />
    <Contact />
  </StrictMode>
)


// re-render with setTimeout()

// root.render(  
//   <StrictMode>
//     <Intro />
//   </StrictMode>
// )

// setTimeout(() =>{
//   root.render(
//     <StrictMode>
//       <Intro />
//       <Projects />
//     </StrictMode>
//   )    
// }, 1000)

// setTimeout(() =>{
//   root.render(
//     <StrictMode>
//       <Intro />
//       <Projects />
//       <Contact />
//     </StrictMode>
//   )     
// }, 2000)
