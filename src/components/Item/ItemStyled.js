import styled,{keyframes} from 'styled-components';

const appear = keyframes`
  from{
    opacity:0;
    transform: translateY(20px)
  }
  to{
    opacity:1;
    transform: translateY(0px)
  }
`

export const ItemWrapper = styled.div`
  width:40vw;
  margin:2rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border:1px solid #00d548;
  border-radius:20px;
  padding:15px;
  animation: ${appear} 0.5s ease-in 0.1s both;

  @media screen and (max-width:767px){
  {
    width:90%;
  }
`;

export const DelButton = styled.button`
  margin-top:1rem;
  font-size:1.5rem;
  border:none;
  padding:5px 10px;
  color:#fff;
  background: #00d548;
`;

export const Paragrph = styled.p`
  font-size: ${props => props.proff ? '0.9rem' : '1.1rem'};
  text-align: center;
  margin-top:.6rem;
  color: ${props => props.proff ? "#00d548" : "#fff"};
`