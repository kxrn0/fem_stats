import { styled } from "solid-styled-components";

const SCCard = styled("div")`
  background: var(--dark-desaturated-blue);
  color: white;
  display: flex;
  flex-direction: row-reverse;
  border-radius: 8px;
  opacity: 0;
  animation: anime-appear calc(3 * var(--time-unit)) forwards;

  picture {
    position: relative;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;

    &::after {
      content: "";
      background: var(--soft-violet);
      mix-blend-mode: multiply;
      position: absolute;
      inset: 0;
    }

    img {
      display: block;

      @media screen and (max-width: 1125px) {
        width: 330px;
      }
    }

    @media screen and (max-width: 1125px) {
      border-top-left-radius: 8px;
      border-bottom-right-radius: 0;
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
        --x: -50vw;

        transform: translate(-100vw);
        animation: anime-enter calc(3 * var(--time-unit)) forwards;

        .stars {
          display: inline;

          .container {
            display: inline;

            .text-anime {
              --color-one: var(--soft-violet);
              --color-two: violet;
            }
          }
        }
      }

      .fs-b1 {
        color: var(--milk-white);
      }

      @media screen and (max-width: 1125px) {
        gap: 16px;
      }
    }

    .stats {
      display: flex;
      justify-content: space-between;

      .fs-b2 {
        color: var(--ghost-white);
      }

      @media screen and (max-width: 1125px) {
        flex-direction: column;
        gap: 25px;
      }
    }

    @media screen and (max-width: 1125px) {
      gap: 40px;
      width: 330px;
      padding: 30px;
      padding-top: 40px;
      text-align: center;
    }
  }

  @media screen and (max-width: 1125px) {
    flex-direction: column;
  }
`;

export default SCCard;
