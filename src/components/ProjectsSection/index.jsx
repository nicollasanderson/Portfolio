import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DivCard, SectionMain } from "./style";
import { projects } from "../../services/projects";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const animationVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, x: -300 },
};

const ProjectsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <SectionMain id="projetos">
      <motion.div
        ref={ref}
        initial="hidden"
        variants={animationVariants}
        animate={controls}
      >
        <Carousel
          showThumbs={false}
          infiniteLoop
          swipeScrollTolerance={10}
          preventMovementUntilSwipeScrollTolerance
        >
          {projects.map(({ name, img, desc, git, demo, stack, role }) => {
            return (
              <DivCard key={name}>
                <motion.div>
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
                  {role && <h4>Role: {role}</h4>}
                  <p>{desc}</p>
                  <span className="linksSpan">
                    <a
                      href={git}
                      target="_blank"
                      className="link_git"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    {demo !== "#" && (
                      <a
                        href={demo}
                        target="_blank"
                        className="link_demo"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    )}
                  </span>
                </motion.div>
              </DivCard>
            );
          })}
        </Carousel>
      </motion.div>
    </SectionMain>
  );
};

export default ProjectsSection;
