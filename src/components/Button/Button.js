import React from 'react';
import styles from './Button.module.css';

const Button = ({children,secondary,openModalFn,...props}) => {

  const btnClass = secondary ? styles.secondary: styles.btn

  return(
    <button
      onClick={openModalFn}
      className={btnClass}
      >{children}
    </button>
  )
}

export default Button;