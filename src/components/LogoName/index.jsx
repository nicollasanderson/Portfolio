import { StyledH1 } from "./style";
import Typewriter from "typewriter-effect";

const LogoName = () => {
  return (
    <StyledH1>
      <a
        href="https://www.linkedin.com/in/nicollas-anderson/"
        target="_blank"
        rel="noreferrer"
      >
        <Typewriter
          options={{
            strings: ["Nícollas Anderson"],
            autoStart: true,
            pauseFor: 99999999,
            loop: false,
          }}
        />
      </a>
    </StyledH1>
  );
};

export default LogoName;
