import { DivContainer } from "./style";
import { motion } from "framer-motion";
import { useRef } from "react";
import MainTypingText from "../MainTypingText";

const TecsDisplay = ({ word }) => {
  const constraintsRef = useRef(null);
  return (
    <DivContainer ref={constraintsRef}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: [-300, 0] }}
        transition={{ duration: 2 }}
      >
        Desenvolvedor <MainTypingText />
      </motion.h1>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: [300, 0] }}
        transition={{ duration: 2 }}
      >
        <motion.img
          whileHover={{ scale: 1.3 }}
          drag
          dragConstraints={constraintsRef}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="HTML5 logo"
        />
        <motion.img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          drag
          dragConstraints={constraintsRef}
          whileHover={{ scale: 1.3 }}
          alt="CSS3 Logo"
        />
        <motion.img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          drag
          dragConstraints={constraintsRef}
          whileHover={{ scale: 1.3 }}
          alt="JavaScript Logo"
        />
        <motion.img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          drag
          dragConstraints={constraintsRef}
          whileHover={{ scale: 1.3 }}
          alt="React Logo"
        />
        <motion.img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          drag
          dragConstraints={constraintsRef}
          whileHover={{ scale: 1.3 }}
          alt="NodeJS Logo"
        />
        <motion.img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
          drag
          dragConstraints={constraintsRef}
          whileHover={{ scale: 1.3 }}
          alt="Postgresql Logo"
        />
        <motion.img
          whileHover={{ scale: 1.3 }}
          drag
          dragConstraints={constraintsRef}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="Typescript logo"
        />
      </motion.section>
    </DivContainer>
  );
};

export default TecsDisplay;
