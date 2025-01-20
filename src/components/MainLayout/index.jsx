import styles from "./styles.module.css";

import { IoHome } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { Header } from "../Header/index.jsx";

export const MainLayout = ({ children }) => {
  const links = [
    { value:"Home", link: "#home", icon: <IoHome /> },
    { value: "Sobre mim", link: "#sobre", icon: <ImProfile /> },
    { value: "Projetos", link: "#projetos", icon: <FaLaptopCode /> },
    { value: "Contato", link: "#contato", icon: <TiContacts /> },
    { value: "Competências "},
    { value: "Serviços"}
  ];

  return (
    <div className={styles.container}>
      <Header links={links} />
      <main>
        {children}
      </main>
    </div  >
  );
};
