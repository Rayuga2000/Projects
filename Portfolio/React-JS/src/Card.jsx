import FormElement from './FormElement.jsx'
export default function Card(){
  return(
    <div className="card flex flex-col-reverse items-stretch  text-nowrap lg:flex-row">
        <FormElement />
        <div className="contact_card_body grow flex justify-center items-center">
            <h1 className="header">Contact Me</h1>
            <div className='flex justify-around items-center gap-10'>
              <img src="/icons/github.svg" alt="Github"/>
              <img src="/icons/linkedin.svg" alt="LinkedIn"/>
              <img src="/icons/instagram.svg" alt="Instagram"/>
            </div>
        </div>
    </div>
  )
}