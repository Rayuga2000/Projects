import { useEffect, useRef } from "react"
import Typed from "typed.js";
import Button from "./Button"

function Print() {
  alert("Hello World!")
}

function Intro({id}) {
  const spanID=useRef(null)
  useEffect(()=>{
    const typed = new Typed(spanID.current, {
      strings: ["Developer ^1000","Designer ^1000"],
      stringsElement: null,
      typeSpeed: 40,
      startDelay: 0,
      backSpeed: 50,
      backDelay: 10,
      smartBackspace: false,
      fadeOut: false,
      loop: true,
    });
  },[])

  return (
    <section id={id} className="card-intro">
      <div id="intro">
        <p className="heading-intro">Hello, I'm Tushar <br className="hidden lg:inline" />a Front-End <br className="" /><span ref={spanID} className="inline-block relative"></span></p>
        <p className="mt-7 mb-4">
          I like bringing beautiful web designs into life using the power of coding.&nbsp;
          <br />
          My motto is <span className="text-white/70 font-semibold text-xl font-['Nunito']">beauty and function in equal measures</span>. <br />
          Excited in <span className="text-blue-400 font-semibold text-2xl font-['Nunito']">React</span> , <span className="text-pink-400 font-semibold text-2xl font-['Nunito']">UI/UX designs</span> & <span className="text-green-400 font-semibold text-2xl font-['Nunito']">Deep Learning</span>.
        </p>
        <div className="mt-6 mb-4 flex justify-start gap-6 lg:gap-10">
            <Button btn_color="#ED2939" />
            <Button btn_color="#00c853" />
            <Button btn_color="#00b8d4" />
            <Button btn_color="#ad1457" />
        </div>
        <button id="introButton" className="mt-6" type="submit" onClick={Print}>Download CV</button>
      </div>
      <div className="profile-img">
        <img srcSet="/itadori.jpg 1000w, /itadori.jpeg" alt="" />
      </div>
    </section>
  )
}

export default Intro