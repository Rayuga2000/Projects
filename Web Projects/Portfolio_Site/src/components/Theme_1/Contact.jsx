import React from 'react'

export default function Contact({id}) {
  return (
      <section id={id} className='card-contact'>
        <h1>Contact <span className='border-b-4 border-b-red-500'>Me</span></h1>
        <form className='grid grid-cols-12 p-12 auto-rows-auto gap-x-8 gap-y-10'>
          <div className='col-span-12 w-full xl:col-span-6'>
            {/* <label htmlFor="name">Name</label><br /> */}
            <input type="text" id='name' placeholder='Enter Your Name' /> 
          </div>
          <div className='col-span-12 w-full xl:col-span-6'>
            {/* <label htmlFor="email">E-mail</label><br /> */}
            <input type="text" id='email' placeholder='Enter Your Email' />
          </div>
        <textarea className='col-span-12' placeholder='Enter a message!'></textarea>
        <button type='submit' className='col-[5/8] mb-[-50%]'>Send</button>
        </form>
    </section>
  )
}
