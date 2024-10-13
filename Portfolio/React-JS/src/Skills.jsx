const html="/icons/html5.svg"
const css="/icons/css3.svg"
const js="/icons/js.svg"
const react="/icons/react.svg"
const node="/icons/node.svg"
const mongoDB="/icons/mongoDB.svg"
const c="/icons/c.svg"
const c__="/icons/c++.svg"
const java="/icons/java.svg"
const python="/icons/python.svg"
const linux="/icons/linux.svg"
const git="/icons/git_color.svg"
const sass="/icons/sass.svg"
const tailwind="/icons/tailwind-css.svg"

function Skills(){
    return(
        <section>
            <div className="card">
                <h1 className="header">Skills</h1>
                <hr />
                <div className="skill_div pb-3">
                    <div>
                        <img src={html} />
                        <p>HTML5</p>
                    </div>
                    <div>
                        <img src={css} />
                        <p>CSS3</p>
                    </div>
                    <div>
                        <img src={js} />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <img src={react} />
                        <p>React.js</p>
                    </div>
                    <div>
                        <img src={node} />
                        <p>Node.js</p>
                    </div>
                    <div>
                        <img src={mongoDB} />
                        <p>MongoDB</p>
                    </div>
                    <div>
                        <img src={c} />
                        <p>C</p>
                    </div>
                    <div>
                        <img src={c__} />
                        <p>C++</p>
                    </div>
                    <div>
                        <img src={java} />
                        <p>Java</p>
                    </div>
                    <div>
                        <img src={python} />
                        <p>Python</p>
                    </div>
                    <div>
                        <img src={linux} />
                        <p>Linux</p>
                    </div>
                    <div>
                        <img src={git} />
                        <p>Git</p>
                    </div>
                    <div>
                        <img src={sass} />
                        <p>Sass</p>
                    </div>
                    <div>
                        <img src={tailwind} />
                        <p>Tailwind</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills