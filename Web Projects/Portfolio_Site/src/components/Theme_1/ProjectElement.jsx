import React from 'react'

function ProjectElement({imgSrc,title="lorem-ipsum",desc="lorem ipsum",usedSkills="lorem ipsum"}) {
  return (
    <div className=''>
          <div><img src={imgSrc} alt="" /></div>
          <div>
              <h2>{title}</h2>
              <p>{desc}</p>
              <p>{usedSkills}</p>
          </div>
    </div>
  )
}

export default ProjectElement
