import { injectGlobal } from 'styled-components';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
      font-family: 'Altis';
      src: url('/fonts/altis-light.eot');
      src: url('/fonts/altis-light.eot?#iefix') format('embedded-opentype'),
           url('/fonts/altis-light.woff2') format('woff2'),
           url('/fonts/altis-light.woff') format('woff'),
           url('/fonts/altis-light.ttf') format('truetype');
      font-weight: light;
      font-style: normal;
  }
  @font-face {
      font-family: 'Altis';
      src: url('/fonts/altis-medium.eot');
      src: url('/fonts/altis-medium.eot?#iefix') format('embedded-opentype'),
           url('/fonts/altis-medium.woff2') format('woff2'),
           url('/fonts/altis-medium.woff') format('woff'),
           url('/fonts/altis-medium.ttf') format('truetype');
      font-weight: light;
      font-style: normal;
  }
`;
