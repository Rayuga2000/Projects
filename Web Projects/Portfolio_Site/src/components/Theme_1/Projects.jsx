import React from 'react'

function ProjectElement({id,imgSrc="",}) {
  return (
    <section id={id} className='card-project'>
      <h1>Featured <br className="mt-4 mb-8 xl:hidden"/><span className='border-b-4 border-b-red-500 pb-1'>Projects</span></h1>
      <div className='flex flex-col gap-4 justify-between'>
        <div className='projectElement'>
          <img src={imgSrc} alt="" />
          <div>
            <h2>cGAN-Retinal-Fundus-Study</h2>
            <p>
              Utilized GAN technology to re-create the Image of a Retina based on the part of the region provided as an Input <br />[<span> i.e. if the optic region of a retina was provided the GAN model will create an image of a Retina which has the optic region at the same position and same contrast as the input image </span>]
            </p>
            <p>
              [ github link ]
            </p>
          </div>
        </div>
        <div className='projectElement'>
          <img src={imgSrc} alt="" />
          <div>
            <h2>Portfolio Site</h2>
            <p>
              Created a portfolio site using React, Sass, Tailwind CSS & Swiper.js
            </p>
            <p>
              [ github link ]
            </p>
          </div>
        </div>
        <div className='projectElement'>
          <img src={imgSrc} alt="" />
          <div>
            <h2>Tourism Data Finder using AI</h2>
            <p>
              Using data scraping, prompt engineering, and AI APIs like chatgpt & Gemini created a program that will take the name of a place/country as input and generate an Excel sheet that will contain details about all the tourist spots around the location with AI-generated images in tabular format.
            </p>
            <p>
              [ github link ]
            </p>
          </div>
        </div>
        <div className='projectElement'>
          <img src={imgSrc} alt="" />
          <div>
            <h2>Shape Recognition using Computer Vision</h2>
            <p>
              Using Python and OpenCV, utilized computer vision technology to create a shape recognition program that will detect all kinds of shapes from a given image based on contours.
            </p>
            <p>
            [ github link ]
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectElement
