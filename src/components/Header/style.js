import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: transparent;
  position: absolute;
  color: white;
  height: 80px;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;

  div {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    width: 400px;
  }

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    margin: 0 20px;
  }

  @media (max-width: 800px) {
    nav {
      display: none;
    }
  }
`;
