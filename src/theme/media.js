import { css } from 'styled-components';

const media = {
  extraSmall: (...args) => css`
    @media (max-width: 575px) {
      ${css(...args)}
    }
  `,
  small: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (max-width: 991px) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media (max-width: 1199px) {
      ${css(...args)}
    }
  `,
  extraLarge: (...args) => css`
    @media (max-width: 1399px) {
      ${css(...args)}
    }
  `,
};

export default media;
