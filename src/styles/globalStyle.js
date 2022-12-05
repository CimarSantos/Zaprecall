import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    font-family: 'Recursive', sans-serif;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}


/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

/*
/
/
/
/
/
/
/
Estilos dos componentes do projeto 
/
/
/
/
/
/
/
*/ 

.screen-container{
  background-color: #FB6B6B;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
}

.logo-container {
  display: flex;
  align-items: center;
  margin: 80px 0 20px 0;
 
}

.logo-container img {
  width: 90px;
}

.logo-container h1 {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
}

.footer-concluidos {
  width: 100%;
  min-height: 110px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 25px;
  color: #333333;
  padding: 10px;
}

.footer-concluidos > .container-botoes {
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
}

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = ""
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/

.verde{
    background-color: #2FBE34;
}
.amarelo{
    background-color: #FF922E;
}
.vermelho{
    background-color: #FF3030;
}
.cinza{
    background-color: #333333;
}
.tachado{
    text-decoration: dashed;
}

.container-botoes > button {
  width: 125px;
  height: 50px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  border: none;
  padding:5px;
  cursor: pointer;
}

.pergunta-fechada, .finalizada {
  width: 450px;
  height: 100px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pergunta-fechada > p {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 19px;
  color: #333333;
}

.pergunta-fechada > ion-icon{
    padding-right: 10px;
    font-size: 40px;
    cursor: pointer;
}

.finalizada > p {
    text-decoration: line-through;
}

.pergunta-aberta, .repostas {
  width: 450px;
  height: 150px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pergunta-aberta > img{
  position: absolute;
  bottom: 10px;
  right: 17px;
  width: 27px;
  cursor: pointer;
}

.repostas{
    height: 180px;
    font-size: 21px;
    line-height: 25px;
}
.container-botoes{
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
}

`;

export default GlobalStyle;
