import { IconBase } from 'react-icons';
import styles from './styles.module.css'

import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoCss3 } from "react-icons/io";

export const Tech = () => {

    const data = [
        {
            name: "Javascript",
            icon: <RiJavascriptFill />,
        },
        {
            name: "HTML",
            icon: <FaHtml5 />,
        },
        {
            name: "CSS",
            icon: <IoLogoCss3 />,
        },
        {
            name: "React",
            icon: <FaReact />,
        },
        {
            name: "Java",
            icon: <FaJava />,
        },
        {
            name: "SpringBoot",
            icon: <SiSpring />,
        },
        {
            name: "C++",
            icon: <SiCplusplus />,
        },
    ]

  return (
    <div className={styles.container}>
        { data.map(({name, icon}, i) => (
            <div 
                key={i}
                className={styles.card}
            >
                {icon}
                {name}
            </div>
        ))}
    </div>
  )
}
