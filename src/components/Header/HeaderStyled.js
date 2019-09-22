import styled from 'styled-components';

export const LogoText = styled.p`
  margin-left:1rem;
  font-size:1.2rem;
  font-family:sans-serif
`;

export const Span = styled.span`
  color:#00d548
`

export const HeaderTag = styled.header`
  display: flex;
  justify-content:space-around;
  align-items: center;
  padding:30px 40px;

  @media screen and (max-width:767px){
    display: flex;
    flex-direction: column;
    height: 50vh;
  }
`;

export const ButtonAction = styled.button`
  font-size: 14px;
  text-decoration: none;
  padding: 7px 12px;
  font-weight: 500;
  background: ${props => props.secondary ? '#00d548' : 'none'};
  border: ${props => props.secondary ? 'none' : '2px solid #00d548'};
  color: ${props => props.secondary ? '#fff' : '#00d548'};
`