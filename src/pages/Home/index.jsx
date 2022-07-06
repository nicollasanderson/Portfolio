import Header from "../../components/Header";

import { StyledMain } from "./style";

import MainTypingText from "../../components/MainTypingText";
import TecsDisplay from "../../components/TecsDisplay";
import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";
import ProjectsSection from "../../components/ProjectsSection";

const Home = () => {
  const { word } = MainTypingText(
    ["full stack", "front-end", "back-end"],
    100,
    30
  );
  return (
    <>
      <StyledMain>
        <Header />
        <TecsDisplay word={word} />
        <AboutMe />
        <ProjectsSection />
        <Footer />
      </StyledMain>
    </>
  );
};

export default Home;
