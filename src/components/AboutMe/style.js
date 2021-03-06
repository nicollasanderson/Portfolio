import styled from "styled-components";

export const StyledSection = styled.section`
  overflow: hidden;
  height: 550px;
  /*text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
  */
  span {
    display: flex;
    flex-flow: column;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      max-height: 70%;
      span {
        width: 50%;
      }
    }
  }

  figure {
    width: 300px;
    border-radius: 50%;
    height: 300px;
    display: flex;
    background: rgb(122, 9, 173);
    background: linear-gradient(
      105deg,
      rgba(9, 56, 173, 1),
      rgba(56, 10, 117, 1),
      rgba(134, 11, 186, 1),
      rgba(186, 11, 144, 1),
      rgba(186, 11, 56, 1)
    );
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    img {
      object-fit: cover;
      width: 300px;
      border-radius: 50%;
    }
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
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

  h1 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 10px;
    padding-top: 50px;
  }

  p {
    font-size: 1.5em;
    text-align: justify;
    margin: 20px 0;
  }

  @media (max-width: 1200px) {
    h1 {
      margin-bottom: 25px;
    }
    p {
      font-size: 1.1;
    }
    span {
      > div {
        span {
          width: 60%;
        }
      }
    }
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
      > div {
        span {
          width: 85%;
          height: 85%;
        }
      }
    }
  }
`;
