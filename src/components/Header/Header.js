import React from 'react';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import logoImg from '../../assets/img/worker.png';
// import styles from './Header.module.scss';
import Button from '../Button/Button';


const Header = ({openModalFn}) => {

  const wrapper = {
    display: 'flex',
    justifyContent:'flex-start',
    alignItems: 'center',
    padding:'30px 40px',
  }

  const logoWrapper = {
    display:'flex',
    alignItems:'center',
  
  }

  return(
    <header style={wrapper}>
      <div style={logoWrapper}>
        <img src={logoImg} alt=""/>
        <p style={{marginLeft:'1rem',
        fontSize:'1.5rem',
        fontFamily:'sans-serif'}}>Notes <span style={{color:'#00d548'}}>Szytygarski</span></p>
      </div>
      <HeaderNavigation />
      <Button 
        secondary
        onClick={openModalFn}
        >dodaj</Button>
    </header>
  )
}

export default Header;