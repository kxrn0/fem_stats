import { styled } from "solid-styled-components";

const SCCard = styled("div")`
  background: var(--dark-desaturated-blue);
  color: white;
  display: flex;
  flex-direction: row-reverse;
  border-radius: 8px;
  overflow: hidden;

  picture {
    position: relative;

    &::after {
      content: "";
      background: var(--soft-violet);
      mix-blend-mode: multiply;
      position: absolute;
      inset: 0;
    }

    img {
      display: block;
    }
  }

  .content {
    padding: 70px 120px 60px 70px;
    width: 570px;
    display: flex;
    flex-direction: column;
    gap: 72px;

    .text {
      display: flex;
      flex-direction: column;
      gap: 25px;

      .fs-l {
        .highlight {
          color: var(--soft-violet);
        }
      }

      .fs-b1 {
        color: var(--milk-white);
      }
    }

    .stats {
      display: flex;
      justify-content: space-between;

      .fs-b2 {
        color: var(--ghost-white);
      }
    }
  }
`;

export default SCCard;
