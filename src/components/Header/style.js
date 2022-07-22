import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: transparent;
  position: fixed;
  top: 0;
  color: white;
  height: 80px;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  z-index: 2;

  div {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    width: 400px;
    font-size: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    margin: 0 20px;
    font-weight: bold;
  }

  @media (max-width: 800px) {
    nav {
      display: none;
    }
  }

  @media (max-width: 400px) {
    height: 50px;
  }
`;
