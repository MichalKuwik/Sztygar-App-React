import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'

const Input = ({tag:Tag,name,id,maxLength,label,...props}) => {
  return(
    <div className={styles.formItem}>
      <Tag 
        className={Tag === 'textarea' ? styles.textarea : styles.input}
        name={name}
        id={id}
        maxLength={maxLength}
        placeholder= " "
        {...props}
        />
      <label 
        htmlFor={name}
        className={styles.label}
        >{label}</label>
      <div className={styles.formItemBar}></div>
    </div>
  )
}

Input.propTypes = {
  tag:PropTypes.string,
  name:PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
  maxLength:PropTypes.number,
  label:PropTypes.string.isRequired,
}

Input.defaultProps = {
  tag: 'input',
  maxLength: 200
}

export default Input;