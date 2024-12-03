export default function Experience({id}) {
    return (
        <section id={id}  className="card-exp">
            <h1>Work <br className="mt-4 mb-8 xl:hidden"/> <span className='border-b-4 border-b-red-500 pb-1'>Experience</span></h1>
            <div className="flex-container">
                <div>2021</div>
                <div>
                    <h4>Junior Software Developer (Intern)</h4>
                    <p>at FIXFIN TECHNOLOGIES PVT. LTD.</p>
                    <p>3m/Siliguri, West Bengal - Remote</p>
                </div>
                <ul>
                    <li>
                        Developed and maintained responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and BootStrap4 to ensure seamless performance across devices and browsers.
                    </li><br />
                    <li>
                        Collaborated with designers to implement visually appealing and functional UI/UX components aligned with project goals and user needs.
                    </li><br />
                    <li>
                        Integrated third-party APIs and services to expand website functionality, improving the user experience.
                    </li>
                </ul>
            </div>
        </section>
    )
}