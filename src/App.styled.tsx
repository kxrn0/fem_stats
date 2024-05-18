import { styled } from "solid-styled-components";

const SCApp = styled("div")`
  --time-unit: 0.33s;
  --very-dark-blue: hsl(233, 47%, 7%);
  --dark-desaturated-blue: hsl(244, 38%, 16%);
  --soft-violet: hsl(277, 64%, 61%);
  --milk-white: hsla(0, 0%, 100%, 0.75);
  --ghost-white: hsla(0, 0%, 100%, 0.6);
  --x: 0;
  --y: 0;

  background: var(--very-dark-blue);
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 88px 0;
  overflow-y: hidden;

  .fs-l,
  .fs-m,
  .fs-b1,
  .fs-b2 {
    font-family: inter;
  }

  .fs-l,
  .fs-m {
    font-weight: 700;
  }

  .fs-b1,
  .fs-b2 {
    font-weight: 400;
    line-height: 25px;
  }

  .fs-l {
    font-size: 36px;
    line-height: 44px;

    @media screen and (max-width: 1125px) {
      font-size: 28px;
      line-height: 32px;
    }
  }

  .fs-m {
    font-size: 24px;
  }

  .fs-b1 {
    font-size: 15px;
    letter-spacing: 1px;

    @media screen and (max-width: 1125px) {
      letter-spacing: 0;
    }
  }

  .fs-b2 {
    font-size: 12px;
  }

  .text-anime {
    --bg-size: 400%;
    --color-one: red;
    --color-two: blue;

    background: linear-gradient(
        90deg,
        var(--color-one),
        var(--color-two),
        var(--color-one)
      )
      0 0 / var(--bg-size) 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    animation: anime-bg 8s infinite linear;

    @keyframes anime-bg {
      to {
        background-position: var(--bg-size) 0;
      }
    }
  }

  @keyframes anime-appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes anime-enter {
    from {
      transform: translate(var(--x), var(--y));
    }

    to {
      transform: translate(0, 0);
    }
  }
`;

export default SCApp;
