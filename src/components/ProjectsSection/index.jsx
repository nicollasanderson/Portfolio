import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DivCard, SectionMain } from "./style";
import { projects } from "../../services/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <SectionMain id="projetos">
      <Carousel showThumbs={false} infiniteLoop>
        {projects.map(({ name, img, desc, git, demo, stack }) => {
          return (
            <DivCard key={name}>
              <div>
                <h3>{name}</h3>
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className={
                    stack === "Back-end"
                      ? "stackSpan stackSpan_back"
                      : "stackSpan stackSpan_front"
                  }
                >
                  <h4>{stack}</h4>
                </motion.span>
                <figure>
                  <img src={img} alt="Imagem de um projeto front-end." />
                  <figcaption>A imagem de um projeto front-end.</figcaption>
                </figure>
                <p>{desc}</p>
                <motion.span className="linksSpan" whileHover={{ scale: 1.2 }}>
                  <a
                    href={git}
                    target="_blank"
                    className="link_git"
                    rel="noreferrer"
                  >
                    <span className="backgroundSpan">GitHub</span>
                  </a>
                  {demo !== "#" && (
                    <a
                      href={demo}
                      target="_blank"
                      className="link_demo"
                      rel="noreferrer"
                    >
                      <span className="backgroundSpan">Demo</span>
                    </a>
                  )}
                </motion.span>
              </div>
            </DivCard>
          );
        })}
      </Carousel>
    </SectionMain>
  );
};

export default ProjectsSection;
