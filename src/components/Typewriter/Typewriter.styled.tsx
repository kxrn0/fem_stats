import { styled } from "solid-styled-components";

const SCTypewriter = styled("div")`
  display: grid;
  grid-template-areas: "stack";

  & > * {
    grid-area: stack;
  }

  .words {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    column-gap: 3px;

    @media screen and (max-width: 1125px) {
      justify-content: center;
    }
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

export default SCTypewriter;
