function scrollInto(id) {
    const element=document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth', })
    element.style.marginTop="4%"
}
function hamburg(){
    document.getElementById("hamburger").style.display='none'
    const navLinks=document.querySelector('.navBar').querySelector('ul').style
    navLinks.display='flex';
    navLinks.flexDirection="column"
}
function Header() {
  return (
    <header className="navBar">
        <h1>DEV.IO</h1>
        <button id="hamburger" className="lg:hidden bg-transparent fixed right-0" onClick={()=>hamburg()}>
            <img src="/icons/icons8-hamburger-menu-50.png" width="32px"/>
        </button>
        <ul>
            <li onClick={()=>scrollInto("intro_Section")}>
                INTRO
            </li>
            <li onClick={()=>scrollInto("project_Section")}>
                SKILLS
            </li>
            <li onClick={()=>scrollInto("project_Section")}>
                PROJECTS
            </li>
            <li onClick={()=>scrollInto("contact_Section")}>
                CONTACT
            </li>
        </ul>

    </header>
  )
}

export default Header