import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

import { FaGit, FaGithub } from "react-icons/fa";
import { FaRegWindowRestore } from "react-icons/fa";
import { FaWindowMaximize } from "react-icons/fa6";

export const ProjectCard = ({ data }) => {
  const {
    name,
    image,
    description,
    tech,
    results,
    status,
    colors,
    github,
    deploy,
  } = data;

  const STATUS = ["Concluído", "Em Andamento", "Pausado"];

  //let finalResults = results?.split('\n')

  return (
    <div
      className={styles.view}
      style={{
        "--color": colors[0],
      }}
    >
      <div className={styles.container}>
      

        <div className={styles.image}>
          <img src={image} alt="img" />
          {"../.."+image}
        </div>
        <div className={styles.details}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <span status={status.toString()} className={styles.status}>
            {STATUS[status]}
          </span>
          
          <div className={styles.results}>
            {results?.map((line, key) => (
              <p key={key}>{line}</p>
            ))}
          </div>
          <div className={styles.tech}>
            {tech?.map(({ value }, key) => (
              <span key={key}>{value}</span>
            ))}
          </div>
          <div className={styles.buttons}>
            {!!github && (
              <button>
                <FaGithub />
              </button>
            )}
            {!!deploy && (
              <button>
                <FaWindowMaximize />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
