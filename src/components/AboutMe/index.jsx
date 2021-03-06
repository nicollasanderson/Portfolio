import { StyledSection } from "./style";
import { motion, useAnimation } from "framer-motion";
import BackgroundIcons from "../BackgroundsIcons";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const animationVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.5 },
};

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <StyledSection id="aboutMe">
      <BackgroundIcons />
      <motion.span
        ref={ref}
        initial="hidden"
        variants={animationVariants}
        animate={controls}
      >
        <h1>Sobre mim</h1>
        <div>
          {/* <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          ></motion.div> */}
          <figure>
            <img src="https://i.imgur.com/hUUN4EQ.jpg" alt="Foto do Nícollas" />
            <figcaption>Foto linda do Nícollas :D</figcaption>
          </figure>

          <span>
            <p>
              Apaixonado por tecnologia e jogos, busco solucionar problemas,
              entreter pessoas e me tornar uma pessoa melhor do que ontem.
            </p>
            <p>
              Desde pequeno mexo com computadores e eletrônicos, comecei minha
              carreira na programação em 2014 criando servidores de Garry's Mod.
              Hoje sou Desenvolvedor Full Stack formado pela Kenzie Academy
              Brasil.
            </p>
            <p>
              Precisa de alguma solução para o seu problema? Talvez eu possa te
              ajudar! Entre em contato!
            </p>
          </span>
        </div>
      </motion.span>
    </StyledSection>
  );
};

export default AboutMe;
