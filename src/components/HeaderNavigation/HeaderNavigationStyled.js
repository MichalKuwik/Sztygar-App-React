import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NavigationWrapper = styled.ul`

  @media screen and (max-width:767px){
    height:20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;  
  }
`;

export const NavItem = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 60px;

  @media screen and (max-width:767px){
    margin:1rem auto;
    font-size:1.3rem;
  }
`

export const NavItemLink = styled(NavLink)`
  text-decoration:none;
  color:#00d548;

  &.active {
    font-weight:bold;
  }

  @media screen and (max-width:767px){
    text-align: center;
  }
`