import Header from "../../components/Header";

import { StyledMain } from "./style";

import MainTypingText from "../../components/MainTypingText";
import TecsDisplay from "../../components/TecsDisplay";
import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";
import ProjectsSection from "../../components/ProjectsSection";
import ContactSection from "../../components/ContactSection";
import { useEffect, useState } from "react";

const Home = () => {
  const { word } = MainTypingText(
    ["full stack", "front-end", "back-end"],
    100,
    30
  );

  const [small, setSmall] = useState();
  const [move, setMove] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.scrollY > 600));
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setMove(window.scrollY > 100));
    }
  }, []);

  return (
    <>
      <StyledMain>
        <Header
          className={
            small ? "small__header" : move ? "none__header" : "complete__header"
          }
        />
        <TecsDisplay word={word} />
        <AboutMe />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </StyledMain>
    </>
  );
};

export default Home;
