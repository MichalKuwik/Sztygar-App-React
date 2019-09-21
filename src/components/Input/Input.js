import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'
import styled from 'styled-components';

const InputItem = styled.div`
  width: 100%;
  margin: 24px 0;
  position: relative;
  flex-shrink: 0;
`

const Input = ({tag:Tag,name,id,maxLength,label,...props}) => {
  return(
    <InputItem>
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
        >{label}
      </label>
      <div className={styles.formItemBar}></div>
    </InputItem>
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