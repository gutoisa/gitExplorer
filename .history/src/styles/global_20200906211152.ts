import {createGlobalStyle} from 'styled-components';
import subpageimage from '../assets/subpage-image.svg';
export default createGlobalStyle `

* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

 body{

    -webkit-font-smoothing: antialiased;
    background: url(${subpageimage}) no-repeat 70% top;

 }
 input, body, button {
     font: 16px Roboto, sans-serif;
     background-color: #F0F0F5;
 }
 #root {
    max-width: 960px;
    margin: 0 auto; /* pra centralizar as informações desse container */
    padding: 40px 20px;
 }

 button {
     cursor: pointer;
 }
`;
