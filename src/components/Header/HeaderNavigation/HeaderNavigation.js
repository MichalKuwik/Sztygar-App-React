import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './HeaderNavigation.module.scss'


const HeaderNavigation = () => {
  return(
    <nav>
    <ul className={styles.wrapper}>
      <li className={styles.navItem}>
        <NavLink
          exact 
          activeClassName={styles.navItemLinkActive} 
          className={styles.navItemLink} 
          to="/">crew</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink 
          activeClassName={styles.navItemLinkActive} 
          className={styles.navItemLink} 
          to="/work">work</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink 
          activeClassName={styles.navItemLinkActive} 
          className={styles.navItemLink} 
          to="/raport">raport</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default HeaderNavigation;