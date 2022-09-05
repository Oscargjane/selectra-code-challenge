import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

  /* 1. Remove default margin and padding */
  * {
    margin: 0;
    padding: 0;
  }

  /* 2. Use a more-intuitive box-sizing model. */
  *, *::before, *::after {
    box-sizing: inherit;
  }

  /* 3. Use a more-intuitive box-sizing model and set a base font size */
  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%

    @media only screen and (min-width: ${({ theme }) => theme.bp.medium}) {
      font-size: 75%;
    }
  }

  /* 4. Allow percentage-based heights in the application */
  html, body, #root {
    height: 100%;
  }

  /*
    Typographic tweaks!
    5. Set a default font type and width
    6. Add accessible line-height
    7. Improve text rendering
  */
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.gray_900};
    background-color: ${({ theme }) => theme.colors.primary_100};
    -webkit-font-smoothing: antialiased;
  }

  /* 8. Remove built-in form typography styles */
  input, button, textarea, select {
    font: inherit;
  }

  /* 9. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 10. Create a root stacking context */
  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
