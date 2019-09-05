import React from 'react'
import styles from './Button.module.scss';

const Button = ({children}) => {

  const btn = {
    padding:'10px',
    border:'1px solid #00d548',
    background:'transparent',
    color:'#7d7d7d',
  }

  return(
    <button style={btn}>{children}</button>
  )
}

export default Button;