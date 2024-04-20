import { Sidebar } from "../Sidebar/index.jsx";
import { Container, Main } from "./styles.js";

import { IoHome } from "react-icons/io5";
import { ImProfile } from "react-icons/im";

export const MainLayout = ({ children }) => {
  const links = [
    { link: "Home", icon: <IoHome /> },
    { link: "Home", icon: <ImProfile /> },
  ];

  return (
    <Container>
      <Sidebar links={links} />
      <Main>{children}</Main>
    </Container>
  );
};
