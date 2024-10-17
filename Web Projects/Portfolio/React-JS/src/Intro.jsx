
function Print() {
  alert("Hello World!")
}

function Intro() {
  return (
    <section>
      <div className="card-intro flex items-center flex-col-reverse md:flex-row justify-between">
        <div id="intro">
          <p className="header-intro m-0">Hello, I'm Tushar<br />a Front-End Developer</p>
          <p className="mt-7 mb-4">I like bringing beautiful web designs into life using the power of coding. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <button className="mt-4" type="submit" onClick={Print}>Download CV</button>
        </div>
        <div className="profile-img ">
          <img src="/public/itadori.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Intro
