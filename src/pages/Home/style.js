import styled from "styled-components";

export const StyledMain = styled.main`
  h2 {
    color: white;
    position: absolute;
  }
  img {
    width: 80px;
    cursor: pointer;
    margin: 10px;
  }

  @media (max-width: 600px) {
    img {
      width: 60px;
    }
  }
`;
