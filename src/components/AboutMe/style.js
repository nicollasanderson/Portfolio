import styled from "styled-components";

export const StyledSection = styled.section`
  /* overflow: hidden; */
  height: 550px;
  /*text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
  */
  span {
    width: 50%;
  }

  figure {
    width: 300px;
    border-radius: 50%;
    height: 300px;
    display: flex;
    background: rgb(122, 9, 173);
    background: linear-gradient(
      106deg,
      rgba(122, 9, 173, 1) 0%,
      rgba(149, 9, 108, 1) 14%,
      rgba(98, 10, 117, 1) 51%,
      rgba(255, 0, 91, 1) 100%
    );
    img {
      object-fit: cover;
      width: 100%;
      border-radius: 50%;
    }
  }

  h1 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 50px;
    padding-top: 50px;
  }

  p {
    font-size: 1.5em;
    text-align: justify;
    margin: 20px 0;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  @media (max-width: 900px) {
    align-items: center;
    h1 {
      margin-bottom: 25px;
    }
    figure {
      display: none;
    }
    p {
      font-size: 1.1em;
    }
    span {
      width: 85%;
      height: 85%;
    }
  }
`;
