import React from 'react'
import logo from '../../assets/img/worker.png';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import Button from '../Button/Button';
import styles from './Header.module.css';

const Header = ({openModalFn}) => {
  return(
    <header 
      
      className={styles.wrapper}
      >
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

const logoW = {
  display:'flex',
  alignItems:'center',

}

export default Header;