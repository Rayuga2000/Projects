import { Footer, Header, Intro, Skills, Contact, Github,Experience,Projects,Certificates } from './components'

function App() {    
    return (
        <>
            <Header />
            <div className="hero_Section">
                <Intro id="intro_Section" />
                <Skills id="skill_Section" />
                <Projects id="project_Section" />                
                <Certificates id="certificate_Section" />                
                <Github id="github_Section"/>
                <Contact id="contact_Section" />
                <Experience id="experience_Section" />
            </div>
            <Footer />
        </>
    )
}

export default App
