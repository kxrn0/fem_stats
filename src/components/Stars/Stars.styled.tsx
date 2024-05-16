import { styled } from "solid-styled-components";

const SCStars = styled("div")`
  position: relative;

  canvas {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;

export default SCStars;
