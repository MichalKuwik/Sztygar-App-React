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