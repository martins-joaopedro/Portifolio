import { IconBase } from 'react-icons';
import styles from './styles.module.css'
import { RiJavascriptFill } from "react-icons/ri";

export const Tech = () => {

    const data = [
        {
            name: "Javascript",
            icon: <RiJavascriptFill />,
        }
    ]

  return (
    <div>
        { data.map(({name, icon}, i) => (
            <div 
                key={i}
            >
                {name}
                {icon}
            </div>
        ))}
    </div>
  )
}
