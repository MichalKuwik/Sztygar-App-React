import React from 'react';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import logoImg from '../../assets/img/worker.png';
import styles from './Header.module.scss';

const Header = () => {
  return(
    <header>
      <div className={styles.logoWrapper}>
        <img src={logoImg} alt=""/>
        <h3>Notes <span className={styles.span}>Szytygarski</span></h3>
      </div>
      <HeaderNavigation />
    </header>
  )
}

export default Header;