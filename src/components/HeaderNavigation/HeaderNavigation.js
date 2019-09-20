import React from 'react'
import {NavigationWrapper,NavItem,NavItemLink} from './HeaderNavigationStyled';


const HeaderNavigation = () => {

  return(
    <nav>
    <NavigationWrapper>
      <NavItem>
        <NavItemLink
          exact 
          to="/">crew</NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink 
          to="/works">works</NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink 
          to="/raports">raports</NavItemLink>
      </NavItem>
    </NavigationWrapper>
  </nav>
  )
}

export default HeaderNavigation;