import { Link } from "react-scroll";
import LogoName from "../LogoName";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <LogoName>Nicollas Dev</LogoName>
        <nav>
          <Link
            activeClass="active"
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            href="#"
          >
            Sobre mim
          </Link>
          <Link
            activeClass="active"
            to="projetos"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            href="#"
          >
            Projetos
          </Link>
          <Link
            activeClass="active"
            to="contato"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            href="#"
          >
            Contato
          </Link>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
