
function Print() {
  alert("Hello World!")
}

function Intro() {
  return (
    <section>
      <div className="card-intro flex justify-between" id="intro_card">
        <div id="intro">
          <p className="header-intro m-0">Hello, I'm Tushar<br />a Front-End Developer</p>
          <pre className="mt-7 mb-4">I like bringing beautiful web designs into life<br />using the power of coding.</pre>
          <button type="submit" onClick={Print}>Download CV</button>
        </div>
        <div id="profile-img"></div>
      </div>
    </section>
  )
}

export default Intro
