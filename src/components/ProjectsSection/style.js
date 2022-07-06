import styled from "styled-components";

export const SectionMain = styled.section`
  height: 700px;
  width: 100%;

  .control-arrow {
    margin-top: 50%;
    width: 5%;
  }

  background: linear-gradient(
    105deg,
    rgba(56, 10, 117, 1),
    rgba(134, 11, 186, 1),
    rgba(186, 11, 144, 1)
  );

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
  height: 700px;
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

  .linksSpan {
    margin: 20px 0;
    a {
      margin: 0 20px;
      text-decoration: none;
      color: white;
      text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
      padding: 12px 2px;
    }
  }

  .link_git {
    border-radius: 7px;
    background: rgb(25, 185, 57);
    background: linear-gradient(
      71deg,
      rgba(25, 185, 57, 1) 0%,
      rgba(255, 248, 0, 1) 100%
    );
  }

  .link_demo {
    border-radius: 7px;
    background-color: #ffe53b;
    background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
  }

  .backgroundSpan {
    background-color: white;
    padding: 10px;
    border-radius: 6px;
  }

  @media (max-width: 700px) {
    width: 90%;
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
    }

    h3 {
      border-bottom: 2px solid;
      width: 30%;
      margin: 20px 0;
      height: 100%;
    }

    figure {
      width: 500px;
      margin: 0 auto;
    }

    @media (max-width: 700px) {
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
