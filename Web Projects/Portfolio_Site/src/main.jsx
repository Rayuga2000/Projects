import { createRoot } from 'react-dom/client'
import './index.scss'
import { Footer, Header, Intro, Skills, Card, Contact, Github } from './components'
import ProjectElement from './components/Theme_1/ProjectElement'
import ProjectProvider from './contexts/project'

const { id, sectClass, h1, divClass, divElements }={
  id: "project_Section",
  sectClass: "card-project",
  h1: "Featured Projects",
  divClass: "flex justify-between mt-8",
  divElements: [
      <ProjectElement />,
      <ProjectElement />,
      <ProjectElement />,
      <ProjectElement />,
      <ProjectElement />            
  ]
}

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <div className="hero_Section">
      <Intro id="intro_Section" />
      <Skills id="skill_Section" />
      <ProjectProvider value={{ id, sectClass, h1, divClass, divElements }}>
        <Card />
      </ProjectProvider>
      <Github id="github_Section"/>
      <Contact id="contact_Section" />
    </div>
    {/* <Footer /> */}
  </>
)
