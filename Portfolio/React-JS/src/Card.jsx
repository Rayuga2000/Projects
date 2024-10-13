import FormElement from './FormElement.jsx'
export default function Card(){
  return(
    <div className="card flex flex-col-reverse min-w-xs text-nowrap md:flex-row justify-between">
        <FormElement />
        <div className="contact_card_body grow flex justify-center items-center">
            <h1 className="header-contact">Contact Me</h1>
            <div className='flex justify-around items-center'>
              <img src="/icons/github.svg" alt="Github"/>
              <img src="/icons/linkedin.svg" alt="LinkedIn"/>
              <img src="/icons/instagram.svg" alt="Instagram"/>
            </div>
        </div>
    </div>
  )
}