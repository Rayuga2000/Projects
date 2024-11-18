import { createRoot } from 'react-dom/client'
import './index.scss'
import { Footer, Header, Intro, Skills, Card, Contact, Github,Experience } from './components'
import ProjectProvider from './contexts/project'

const { id, sectClass, h1, divClass }={
  id: "project_Section",
  sectClass: "card-project",
  h1: "Featured Projects",
  divClass: "flex justify-between"
}

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <div className="hero_Section">
      <Intro id="intro_Section" />
      <Skills id="skill_Section" />
      <ProjectProvider value={{ id, sectClass, h1, divClass }}>
        <Card />
      </ProjectProvider>
      <Github id="github_Section"/>
      <Contact id="contact_Section" />
      <Experience />
    </div>
    <Footer />
  </>
)
