import styled from "styled-components";

export const IconsDiv = styled.div`
  display: flex;
  flex-flow: wrap;
  position: relative;
  z-index: -1;
  gap: 1px;
  width: 120%;

  svg {
    overflow: hidden;
    width: 60px;
    height: 60px;
    color: #f5f5f5;
    margin: 8px;
    -webkit-transform: rotate(20deg); /* Chrome, Opera */
    -ms-transform: rotate(20deg); /* IE */
    transform: rotate(20deg);
  }
  > div {
    position: absolute;
    margin-top: 545px;
  }
`;
