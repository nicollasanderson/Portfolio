import { SectionMain } from "./style";
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const hoverVariant = {
  hover: {
    scale: 1.3,
    transition: { type: "spring", stiffness: 300, duration: 0.5 },
  },
};

const animationVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: -200 },
};

const h1Animation = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 0.5 },
};

const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <SectionMain id="contato">
      <svg width="0" height="0">
        <radialGradient id="rg" r="150%" cx="30%" cy="107%">
          <stop stopColor="#fdf497" offset="0" />
          <stop stopColor="#fdf497" offset="0.05" />
          <stop stopColor="#fd5949" offset="0.45" />
          <stop stopColor="#d6249f" offset="0.6" />
          <stop stopColor="#285AEB" offset="0.9" />
        </radialGradient>
      </svg>
      <motion.h1 initial="hidden" animate={controls} variants={h1Animation}>
        Contato
      </motion.h1>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        <motion.a
          initial={{ opacity: 0, y: -200 }}
          whileHover="hover"
          animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          variants={hoverVariant}
          href="https://www.linkedin.com/in/nicollas-anderson/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
          <AiFillLinkedin style={{ color: "#0A66C1" }} />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          whileHover="hover"
          variants={hoverVariant}
          href="https://github.com/nicollasanderson"
          target="_blank"
          rel="noreferrer"
        >
          Github
          <AiFillGithub style={{ color: "black" }} />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          whileHover="hover"
          variants={hoverVariant}
          href="https://api.whatsapp.com/send?phone=5594981188447&text=Ol%C3%A1!%20Poderia%20me%20ajudar%3F"
          target="_blank"
          rel="noreferrer"
        >
          Whatsapp
          <AiOutlineWhatsApp style={{ color: "#27D366" }} />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          whileHover="hover"
          variants={hoverVariant}
          href="https://youtube.com/user/SrCraftt"
          target="_blank"
          rel="noreferrer"
          id="youtube"
        >
          YouTube
          <AiFillYoutube style={{ color: "red" }} />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          whileHover="hover"
          variants={hoverVariant}
          href="https://www.instagram.com/nicollas_a0/"
          target="_blank"
          rel="noreferrer"
          id="instagram"
        >
          Instagram
          <AiOutlineInstagram />
        </motion.a>
      </motion.div>
    </SectionMain>
  );
};

export default ContactSection;
