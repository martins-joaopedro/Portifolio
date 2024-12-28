import styles from './styles.module.css'
import { ProjectCard } from '../../components/ProjectCard'

import { data } from '../../data/projects.json'

export const Projects = () => {
  return (
    <div className={styles.container}>
        <h1>projetos</h1>
        { data.map((project, key) => (
            <ProjectCard 
                key={key}
                name={project.name}
                description={project.description}
                image={project.image}
            />
        ))}
    </div>
  )
}
