import React from 'react'
import logo from '../../assets/img/worker.png';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import Button from '../Button/Button';
import {LogoText,Span,HeaderTag} from './HeaderStyled';

const Header = ({openModalFn}) => {
  return(
    <HeaderTag>
      <div style={logoW}>
      <img src={logo} alt=""/>
      <LogoText>
        <Span>Notes</Span> 
        Szytgarski
      </LogoText>
      </div>
      
      <HeaderNavigation/>
      <Button 
        secondary
        openModalFn={openModalFn}
        >dodaj</Button>
    </HeaderTag>
  )
}

const logoW = {
  display:'flex',
  alignItems:'center',
}

export default Header;