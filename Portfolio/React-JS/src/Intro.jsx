
function Print() {
  alert("Hello World!")
}

function Intro() {
  return (
    <section>
      <div className="card-intro flex flex-col-reverse md:flex-row justify-between">
        <div id="intro">
          <p className="header-intro m-0">Hello, I'm Tushar<br />a Front-End Developer</p>
          <pre className="mt-7 mb-4">I like bringing beautiful web designs into life<br />using the power of coding.</pre>
          <button type="submit" onClick={Print}>Download CV</button>
        </div>
        <div className="profile-img grow"></div>
      </div>
    </section>
  )
}

export default Intro
