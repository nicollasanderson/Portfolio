import React, { useEffect, useState } from "react";
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
  const [elements] = useState([]);

  useEffect(() => {
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

    [...Array(300)].map((e, i) => {
      let number = Math.random() * 23;
      let index = Math.floor(number);
      return elements.push(
        <React.Fragment key={Math.random() * 999}>
          {Icons[index]}
        </React.Fragment>
      );
    });
  }, [elements]);

  return (
    <IconsDiv>
      <div>{elements.map((element) => element)}</div>
    </IconsDiv>
  );
};

export default BackgroundIcons;
