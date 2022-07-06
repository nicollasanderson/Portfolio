import Typewriter from "typewriter-effect";

const MainTypingText = () => {
  return (
    <Typewriter
      options={{
        strings: ["Front-end", "Back-end", "Full Stack"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default MainTypingText;
