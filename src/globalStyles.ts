import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
    body html #root {
    height: 100%;
  }
  :root{
  --footer-login: 80px;
  --content-recent-game: 33vh;
  --footer-account: 17%;
  }
`;