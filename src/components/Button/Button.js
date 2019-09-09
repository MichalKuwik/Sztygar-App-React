import React from 'react'
import styles from './Button.module.scss';

const Button = ({children,secondary,...props}) => {

 const btnStyle = secondary ? styles.secondaryBtn : styles.btn

  return(
    <button 
      className={btnStyle}
      {...props}
      >{children}</button>
  )
}

export default Button;