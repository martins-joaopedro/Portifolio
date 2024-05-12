import { Sidebar } from "../Sidebar/index.jsx";
import { Container, Main } from "./styles.js";

import { IoHome } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

export const MainLayout = ({ children }) => {
  const links = [
    { value:"Home", link: "#home", icon: <IoHome /> },
    { value: "Sobre mim", link: "#sobre", icon: <ImProfile /> },
    { value: "Projetos", link: "#projetos", icon: <FaLaptopCode /> },
    { value: "Tecnologias", link: "#tech", icon: <ImProfile /> },
    { value: "Contato", link: "#contato", icon: <TiContacts /> },
  ];

  return (
    <Container>
      <Sidebar links={links} />
      <Main>{children}</Main>
    </Container>
  );
};
