import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Enable safe area support on iOS */
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    html {
      /* Ensure we can use safe area insets */
    }
  }
  
  body {
    background: #181818;
    margin: 0;
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    color: #fff;
    /* Add padding for fixed footer player */
    padding-bottom: 90px;
    -webkit-overflow-scrolling: touch;
    @media (max-width: 768px) {
      padding-bottom: calc(100px + env(safe-area-inset-bottom, 0px));
    }
  }

  /* Prevent iOS bounce/rubber-banding causing gaps */
  html, body {
    overscroll-behavior: none;
  }
`;

export default GlobalStyle;
