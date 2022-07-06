import React from "react";
import {
  DiReact,
  DiHtml5,
  DiDjango,
  DiJsBadge,
  DiGithubBadge,
  DiHeroku,
  DiCodeBadge,
  DiChrome,
  DiCss3,
  DiDatabase,
  DiDocker,
  DiLinux,
  DiPostgresql,
  DiPython,
  DiStackoverflow,
  DiTerminal,
  DiUbuntu,
  DiWindows,
  DiVisualstudio,
  DiTerminalBadge,
  DiNodejsSmall,
  DiNodejs,
} from "react-icons/di";
import { IconsDiv } from "./style";

const BackgroundIcons = () => {
  const Icons = [
    <DiReact />,
    <DiHtml5 />,
    <DiDjango />,
    <DiJsBadge />,
    <DiGithubBadge />,
    <DiHeroku />,
    <DiCodeBadge />,
    <DiChrome />,
    <DiCss3 />,
    <DiDatabase />,
    <DiDocker />,
    <DiLinux />,
    <DiPostgresql />,
    <DiPython />,
    <DiStackoverflow />,
    <DiTerminal />,
    <DiUbuntu />,
    <DiWindows />,
    <DiVisualstudio />,
    <DiTerminalBadge />,
    <DiNodejsSmall />,
    <DiNodejs />,
  ];

  return (
    <IconsDiv>
      <div>
        {[...Array(300)].map((e, i) => {
          let number = Math.random() * 23;
          let index = Math.floor(number);
          return <React.Fragment key={i}>{Icons[index]}</React.Fragment>;
        })}
      </div>
    </IconsDiv>
  );
};

export default BackgroundIcons;
