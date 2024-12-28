import styles from './styles.module.css'

export const ProjectCard = ({ name, image, description }) => {
  return (
    <div className={styles.container}>
        <div>
            <img src={image} alt="" />
        </div>
        <div className={styles.projectInfo}>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className={styles.tech}>
                <span>324</span>
                <span>324</span>
                <span>324</span>
            </div>
        </div>  
    </div>
  )
}
