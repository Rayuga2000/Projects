import {  } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {Footer,Header,Intro,Skills} from './components'
createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <div className="hero_Section">
      <Intro id="intro_Section" />
      <Skills id="skill_Section" />
    </div>
    <Footer />
  </>,
)
