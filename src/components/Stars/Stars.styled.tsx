import { styled } from "solid-styled-components";

const SCStars = styled("div")`
  position: relative;

  canvas {
    position: absolute;
    /* display: block; */
    border: 3px solid red;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default SCStars;
