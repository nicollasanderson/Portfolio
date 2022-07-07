import styled from "styled-components";

export const SectionMain = styled.section`
  height: 500px;

  #instagram svg * {
    fill: url(#rg);
  }

  h1 {
    font-size: 50px;
    text-align: center;
    padding-top: 50px;
    margin-bottom: 30px;
  }

  > div {
    width: 50%;
    margin: 0 auto;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

    a {
      color: transparent;
      display: flex;
      flex-flow: column;
    }

    svg {
      width: 150px;
      height: 150px;
      margin: 0 30px;
    }

    @media (max-width: 1100px) {
      svg {
        width: 90px;
        height: 90px;
        margin: 0 20px;
      }
    }

    @media (max-width: 800px) {
      width: 60%;
      flex-flow: wrap;
      svg {
        width: 90px;
        height: 90px;
        margin: 0 20px;
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
  }

  @media (max-width: 540px) {
    h1 {
      font-size: 35px;
    }
    > div {
      width: 80%;
      flex-flow: wrap;

      svg {
        margin: 0 18px;
      }
    }
  }

  @media (max-width: 400px) {
    > div {
      width: 90%;
      flex-flow: wrap;

      svg {
        margin: 0;
      }
    }
  }
`;
