import Button from "./components/Button"

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
          <div className="mt-5 mb-4 flex justify-start gap-6 lg:gap-10">
              <Button btn_color="#ED2939" />
              <Button btn_color="#00c853" />
              <Button btn_color="#00b8d4" />
              <Button btn_color="#ad1457" />
          </div>
          <button id="introButton" className="mt-4" type="submit" onClick={Print}>Download CV</button>
        </div>
        <div className="profile-img">
          <img srcset="/itadori.jpg 1024w, /itadori_centered.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Intro
