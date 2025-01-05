import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'

import { FaGit, FaGithub } from "react-icons/fa";
import { FaRegWindowRestore } from "react-icons/fa";
import { FaWindowMaximize } from 'react-icons/fa6';

export const ProjectCard = ({ data }) => {

  const { name, image, description, la, tech, results, date, status, colors } = data;

  const STATUS = ["Concluído", "Em Andamento", "Pausado"]

  return (
    <div className={styles.view}>
      <div className={styles.container}
        style={{backgroundPosition: "70%", backgroundSize: "300%", background: `linear-gradient(-135deg, var(--bg-dark), ${colors[0]})` }}
      >
        <div className={styles.image}> 
          <img src={image} alt="" />
        </div>
        <div className={styles.details}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <span
            status={status.toString()}
            className={styles.status}
          >
            {STATUS[status]}
          </span>
          <div className={styles.tech}>
            {
              tech?.map(({ value }, key) => (
                <span key={key}>{value}</span>
              ))
            }
          </div>
          <p>{results}</p>

          <div className={styles.buttons}>
            <button><FaGithub/></button>
            <button><FaWindowMaximize /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
