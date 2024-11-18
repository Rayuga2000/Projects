import { useContext } from 'react'
import ProjectElement from './ProjectElement'
import { ProjectContext } from '../../contexts/project';

const arr = [
  {
    title: 'cGAN-Retinal-Fundus-Study',
    desc: 'A Study on Conditional Generative Adversarial Network using Retinal Fundus Images',
    usedSkills:'[python, deep learning (pytorch), computer vision & image processing (opencv)]'
  },
  {
    title: 'Tourism Data Finder using AI',
    desc: 'Finds Tourist Data using AI APIs',
    usedSkills:'[python, APIs (chatgpt, gemini, dall-e), Prompt Engineering]'
  },
  
]

export default function Card() {
  const { id, sectClass, h1, divClass } = useContext(ProjectContext)
  
  return (
    <section id={id} className={sectClass}>
      <h1>{h1}</h1>
      <div className={divClass}>
        {
          arr.map((currValue) => {
            <ProjectElement title={currValue.title} desc={currValue.desc} usedSkills={currValue.usedSkills} />
            console.log(currValue.title)
          })
        }
      </div>
    </section>
  )
}
