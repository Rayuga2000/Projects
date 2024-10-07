
function Print() {
  alert("Hello World!")
}

function Intro() {
  return (
    <section>
      <div className="card" id="intro_card">
        <div id="intro">
          <p className="header">Hello, I'm Tushar<br />a Front-End Developer</p>
          <pre>I like bringing beautiful web designs into life<br />using the power of coding.</pre>
          <button type="submit" onClick={Print}>Download CV</button>
        </div>
        <div className="image-div"></div>
      </div>
    </section>
  )
}

export default Intro
