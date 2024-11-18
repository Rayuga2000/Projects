function Footer() {
  return (
    <footer>
      <h1>Get in Touch</h1>
      <p>
        I'm eager to join a collaborative team where I can contribute my skills and learn from others. If you have an exciting project, let's discuss how I can be a valuable asset. I'm actively seeking a new opportunity to apply my skills and continue growing!
      </p>
      <div className="flex gap-4 rounded-lg p-2 bg-gray-400/20">
        <img src="/icons/icons8-github-64.png" width="38px" alt="" />
        <img src="/icons/icons8-twitter-50.png" width="38px" alt="" />
        <img src="/icons/icons8-whatsapp-50.png" width="38px" alt="" />
        <img src="/icons/icons8-instagram-50.png" width="38px" alt="" />
      </div>
      <p>
        Designed and Coded by <span className='text-blue-400 font-bold'>Tushar Sarkar</span>. Built with React, Sass & Tailwind CSS.
      </p>
    </footer>
  )
}

export default Footer