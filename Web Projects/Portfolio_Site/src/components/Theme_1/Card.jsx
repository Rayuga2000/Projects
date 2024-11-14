import { useContext } from 'react'
import { ProjectContext } from '../../contexts/project';

export default function Card() {
  const { id, sectClass, h1, divClass, divElements } = useContext(ProjectContext)
  
  return (
    <section id={id} className={sectClass}>
      <h1>{h1}</h1>
      <div className={divClass}>
        {divElements.map((item) => item)}
      </div>
    </section>
  )
}
