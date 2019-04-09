import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

// tslint:disable-next-line
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,700&subset=korean');
  @import url('https://fonts.googleapis.com/css?family=Audiowide');
  ${reset}
    html, body, #root{
      width:100%;
      height:200%;
      font-family: "Noto Sans KR", -apple-system, system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif;
    }
    * {
      box-sizing: border-box;
    }
    *:focus{
      outline:none;
    }
    a{
      color:inherit;
      text-decoration:none;
    }
    input,
    button{
      &.focus,
      &.active{outline:none}
      font-family: "Noto Sans KR", -apple-system, system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif;
    }
`;

export default GlobalStyle;
