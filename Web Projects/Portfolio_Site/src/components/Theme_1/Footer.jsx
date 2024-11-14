import React from 'react'

function Footer() {
  return (
    <footer>
        <h1>DEV.IO</h1>
        <div className='gap-8 flex justify-center lg:justify-evenly'>
            <img src="/icons/icons8-twitter-50.png" alt="" width="32px" />
            <img src="/icons/icons8-instagram-50.png" alt="" width="32px" />
            <img src="/icons/icons8-linkedin-50.png" alt="" width="32px" />
        </div>
        <div className='text-center flex flex-col gap-2'>
            <h2>Get in Touch</h2>
            <p>tsarkar431@gmail.com</p>
            <p>+91 8918709763s</p>
        </div>
    </footer>
  )
}

export default Footer