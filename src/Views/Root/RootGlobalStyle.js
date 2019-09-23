import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,900&display=swap');

  body{
    color: #fff;
    background: #0a1623;
    }
    *, *::before,*::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }
`