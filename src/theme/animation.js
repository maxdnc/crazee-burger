import { css } from "styled-components";

export const basketAnimation = css`
  .animated-basket-card-appear {
    .sticker {
      opacity: 0;
      z-index: 1;
    }
    .basket-card {
      opacity: 0;
      transform: translateY(-10%);
    }
  }

  .animated-basket-card-enter {
    .sticker {
      opacity: 0;
      z-index: 1;
    }
    .basket-card {
      opacity: 0;
      transform: translateY(-10%);
      max-height: 0px;
      margin-bottom: 0;
      padding: 0 0;
    }
  }

  .animated-basket-card-appear-active,
  .animated-basket-card-enter-active {
    .sticker {
      opacity: 1;
      transition: all 0.35s ease-in-out;
      z-index: 1;
    }
    .basket-card {
      transform: translateY(0);
      opacity: 1;
      transition: all 0.2s ease-in, padding 0.1s ease-in;
      max-height: 86px;
      margin-bottom: 1.25rem;
      padding: 0.5rem 1rem;
    }
  }

  .animated-basket-card-exit {
    .sticker {
      opacity: 1;
      z-index: 1;
    }
    .basket-card {
      transform: translateX(0);
      opacity: 1;
      max-height: 86px;
    }
  }

  .animated-basket-card-exit-active {
    .sticker {
      opacity: 0;
      transition: all 0.1s linear;
      z-index: 1;
    }
    .basket-card {
      transform: translateX(-100%);
      opacity: 0;
      transition: all 0.2s ease-in;
      max-height: 0px;
      margin-bottom: 0;
      padding: 0 0;
    }
  }
`;
