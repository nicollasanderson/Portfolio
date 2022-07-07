import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 100px;
  background-image: linear-gradient(
    105.5deg,
    rgba(31, 212, 248, 1) 11%,
    rgba(218, 15, 183, 1) 74.9%
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
  }
  a {
    text-decoration: none;
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
`;
