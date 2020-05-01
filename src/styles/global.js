import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html, body{
    height:100vh;
    position:relative;
    overflow-x:hidden;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background:#0A1B2D;
  }

  body, input, button{
    font:1rem Nunito,Arial,Helvetica,sans-serif;
    letter-spacing:0.5px;
    color:#DDE8F4;
  }

`;
