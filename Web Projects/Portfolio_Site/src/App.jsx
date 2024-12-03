import { Footer, Header, Intro, Skills, Contact, Github,Experience,Projects,Certificates } from './components'

function App() {
    console.log(import.meta.env.VITE_ENDPOINT,import.meta.env.VITE_PROJECT_ID,import.meta.env.VITE_BUCKET_ID);
    
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
