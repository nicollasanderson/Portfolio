import styled from "styled-components";

export const SectionMain = styled.section`
  height: 800px;
  width: 100%;

  .control-arrow {
    margin-top: 50%;
    width: 5%;
  }

  @media (max-width: 800px) {
    .control-arrow {
      display: none;
    }
  }

  background: linear-gradient(
    105deg,
    rgba(56, 10, 117, 0.7),
    rgba(134, 11, 186, 0.7),
    rgba(186, 11, 144, 0.7)
  );

  background-color: black;

  li {
    display: flex;
    align-items: center;
  }
`;

export const DivCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 50%;
  height: 800px;
  max-width: 600px;

  .stackSpan {
    padding: 2px;
    border-radius: 7px;
    h4 {
      background-color: white;
      border-radius: 6px;
      padding: 9px;
      color: white;
      text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    }
    cursor: pointer;
  }

  .stackSpan_back {
    background: rgb(0, 228, 255);
    background: linear-gradient(
      108deg,
      rgba(0, 228, 255, 1) 0%,
      rgba(0, 14, 255, 1) 50%,
      rgba(0, 212, 255, 1) 100%
    );
  }

  .stackSpan_front {
    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );
  }
  .control-arrow {
    z-index: 0;
  }

  .linksSpan {
    margin: 20px 0;
    a {
      margin: 0 20px;
      text-decoration: none;
      color: white;
      text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
      padding: 10px;
      border-radius: 7px;
      border: 2px solid #4158d0;
      transition: 0.2s linear;

      &:hover {
        background-color: #4158d0;
      }
    }
  }

  .backgroundSpan {
    background-color: white;
    padding: 10px;
    border-radius: 6px;
  }

  @media (max-width: 800px) {
    width: 90%;
    .control-arrow {
      display: none;
    }
  }

  img {
    margin: 20px 0;
  }

  > div {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 10px 83px 14px rgba(62, 66, 66, 0.36);
    -moz-box-shadow: 0px 10px 83px 14px rgba(62, 66, 66, 0.36);
    box-shadow: 0px 10px 83px 14px rgba(62, 66, 66, 0.36);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    p {
      text-align: justify;
      margin: 20px 0;
      width: 90%;
      padding: 10px 0;
    }

    h3 {
      border-bottom: 2px solid;
      width: 30%;
      margin: 20px 0;
      height: 100%;
    }

    figure {
      width: 550px;
      margin: 0 auto;
    }

    @media (max-width: 800px) {
      width: 100%;

      figure {
        width: 100%;
        margin: 0 auto;
      }
      h3 {
        width: 70%;
      }
    }
  }
`;
