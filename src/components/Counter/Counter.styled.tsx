import { styled } from "solid-styled-components";

const SCCounter = styled("div")`
  position: relative;
  display: flex;

  .count {
    position: absolute;
    top: 0;
    left: 0;
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

export default SCCounter;
