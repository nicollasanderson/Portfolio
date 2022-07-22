import styled from "styled-components";

export const StyledMain = styled.main`
  transition: 1s;
  .small__header {
    background: linear-gradient(
      135deg,
      rgba(84, 155, 193, 0.7) 0%,
      rgba(44, 101, 173, 0.7) 16%,
      rgba(130, 53, 200, 0.7) 35%
    );
    background-color: black;
    transition: 1s;
    opacity: 1;
    background-size: 200% 200%;
  }

  .complete__header {
    position: absolute;
    opacity: 1;
  }

  .none__header {
    opacity: 0;
  }

  h2 {
    color: white;
    position: absolute;
  }
  img {
    width: 80px;
    cursor: pointer;
    margin: 10px;
  }

  @media (max-width: 400px) {
    img {
      width: 60px;
    }
  }
`;
