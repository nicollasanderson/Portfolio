import styled from "styled-components";

export const DivContainer = styled.section`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  /* background: linear-gradient(
    105deg,
    rgba(9, 56, 173, 1),
    rgba(56, 10, 117, 1),
    rgba(134, 11, 186, 1),
    rgba(186, 11, 144, 1),
    rgba(186, 11, 56, 1)
  ); */
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
  animation: gradient 15s ease infinite;
  height: 100vh;

  section {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin: 50px 0;
  }

  h1 {
    color: white;
    font-size: 50px;
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    gap: 10px;
    display: flex;
    div {
      color: #ff005b;
    }
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

  @media (max-width: 600px) {
    padding-top: 150px;
    section {
      width: 300px;
    }
    h1 {
      width: 300px;
      display: block;
      font-size: 40px;
      text-align: center;
      height: 90px;
    }
  }
  @media (max-width: 400px) {
    height: 120vh;
  }
`;
