function Skills({id}) {
  return (
    <section id={id} className="card-skills">
      <h1>My <span className="border-b-4 border-red-500">Skills</span></h1>
      <div className="flex gap-2 flex-wrap justify-evenly">
        <button className="grow">HTML</button>
        <button className="grow">CSS</button>
        <button className="grow">JAVASCRIPT</button>
        <button className="grow">TAILWIND</button>
        <button className="grow">BOOTSTRAP</button>
        <button className="grow">SASS</button>
        <button className="grow">REACT JS</button>
        <button className="grow">C</button>
        <button className="grow">C++</button>
        <button className="grow">JAVA</button>
        <button className="grow">PYTHON</button>
        <button className="grow">PYTORCH</button>
        <button className="grow">LINUX</button>
        <button className="grow">FIGMA</button>
        <button className="grow">ARTIFICIAL INTELLIGENCE</button>
        <button className="grow">MACHINE LEARNING</button>
        <button className="grow">DEEP LEARNING</button>
        <button className="grow">COMPUTER VISION</button>
        <button className="grow">GIT</button>
        <button className="grow">GITHUB</button>
        <button className="grow">UI/UX DESIGN</button>
      </div>
      <div className="flex justify-between gap-4 xl:mt-8">
        <div>
          <h2>100+</h2>
          <p><span className="text-purple-400 font-semibold">LeetCode</span> questions</p>
        </div>
        <div>
          <h2>200+</h2>
          <p><span className="text-purple-400 font-semibold">HackerRank</span> questions</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
