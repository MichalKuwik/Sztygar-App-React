import styled from 'styled-components';

export const ButtonAction = styled.button`
  font-size: 14px;
  text-decoration: none;
  padding: 7px 12px;
  font-weight: 500;
  background: ${props => props.secondary ? '#00d548' : 'none'};
  border: ${props => props.secondary ? 'none' : '2px solid #00d548'};
  color: ${props => props.secondary ? '#fff' : '#00d548'};

  @media screen and (max-width:767px){
    width:${props=> props.secondary ? '90%' : '100%'};
    font-size:${props=> props.secondary ? '1.3rem': '1rem'};
    font-weight:${props=> props.secondary ? '400': '500'};
  }
`