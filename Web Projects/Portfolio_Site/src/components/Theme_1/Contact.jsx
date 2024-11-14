import React from 'react'

export default function Contact({id}) {
  return (
      <section id={id} className='card-contact'>
        <h1>Contact Me</h1>
        <div>
            <form action="get">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='Enter Your Name' />
                <label htmlFor="email">E-mail</label>
                <input type="text" id='email' placeholder='Enter Your Email' /><br />
                <input type="text-area" placeholder='Enter a message!' />
            </form>
        </div>
    </section>
  )
}
