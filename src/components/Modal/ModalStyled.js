import styled,{keyframes} from 'styled-components';

const modalAnim = keyframes`
0%{
  opacity:0;
  width:0;
}
100%{
  opacity:1;
  width:60vw;
}
`
const modalAnimSmallD = keyframes`
0%{
  opacity:0;
  width:0;
}
100%{
  opacity:1;
  width:95vw;
}
`

export const ModalWrapper = styled.div`
position: fixed;
top:50%;
left:0;
right:0;
transform: translateY(-50%);
width:60vw;
height: 90vh;
background: #0a1623;
border:1px solid #818181;
box-shadow: 0 20px 40px -10px rgba(#818181, .5);
margin:0 auto;
animation: ${modalAnim} 0.5s 0.2s both;

@media screen and (max-width:767px){
  width:95vw;
  height: 95%;
  animation: ${modalAnimSmallD} 0.5s 0.2s both;
}
`

export const BtnClose = styled.button`
background: #00d548;
border:none;
color:#fff;
padding:3px 10px;
font-size:1rem;
font-weight: 300;
position: absolute;
right:2%;
top:2%;

@media screen and (max-width:767px){
  font-size:1.5rem;
}
`