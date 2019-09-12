import React from 'react'
import logo from '../../assets/img/worker.png';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import Button from '../Button/Button';

const Header = ({openModalFn}) => {
  return(
    <header style={wrapper}>
      <div style={logoW}>
      <img src={logo} alt=""/>
      <p style={{
        marginLeft:'1rem',
        fontSize:'1.5rem',
        fontFamily:'sans-serif'
      }}><span style={{color:'#00d548'}}>Notes</span> Szytgarski</p>
      </div>
      
      <HeaderNavigation/>
      <Button 
        secondary
        openModalFn={openModalFn}
        >dodaj</Button>
    </header>
  )
}

const wrapper = {
  display: 'flex',
  justifyContent:'space-around',
  alignItems: 'center',
  padding:'30px 40px',
}

const logoW = {
  display:'flex',
  alignItems:'center',

}

export default Header;