import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from './HeaderNavigation.module.css'

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
          to="/works">works</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink 
          activeClassName={styles.navItemLinkActive} 
          className={styles.navItemLink} 
          to="/raports">raports</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default HeaderNavigation;