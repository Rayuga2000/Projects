function Project_Item({title,desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."}){
    return(
        <div className="projects_card mt-5 ml-5 pb-4">
            <h3 className="project_name">{title}</h3>
            <p>[ {desc} ]</p>
        </div>
    )
}

export default function Projects({id}){
    // console.log({id});
    return(
        <section id={id}>
            <div className="card">
                <h1 className="header">Projects</h1>
                <hr />
                <Project_Item title="A Study On Conditional Generative Adversarial
Network using Retinal Fundus Images" desc="python, pandas, pytorch, numpy, matplotlib, opencv, scikitlearn, data science, machine learning, deep learning"/>
                <Project_Item title="Shape Recognition with Computer Vision" desc="python, numpy, opencv"/>
                <Project_Item title="e-Commerce Website"/>
                <Project_Item title="Tourism Website"/>
                <Project_Item title="Portfolio Page"/>
                <Project_Item title="Tourism Data Finder using AI" desc="python, chatgpt-api, gemini-api, pandas"/>
            </div>
        </section>
    )
}