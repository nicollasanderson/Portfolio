import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: black;
  flex-flow: column;

  .footer_top__line {
    height: 10px;
    width: 100%;
    background: linear-gradient(
      135deg,
      rgba(84, 155, 193, 1) 0%,
      rgba(44, 101, 173, 1) 16%,
      rgba(130, 53, 200, 1) 35%,
      rgba(169, 11, 186, 1) 59%,
      rgba(219, 149, 62, 1) 83%,
      rgba(236, 175, 100, 1) 99%
    );
    background-size: 400% 400%;
    animation: gradient 8s ease infinite;
  }

  div {
    height: 90px;
    display: flex;
    align-items: center;
  }

  h1 {
    color: white;
    font-size: 30px;
  }
  a {
    text-decoration: none;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
