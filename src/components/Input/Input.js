import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

//zastąpimy textarea dynamicznie propsem,
//jezeli podajemy nazwe tagu na nie html'owa musi byc z Duzej litery!
//robimy myk w propsach

const Input = ({tag:Tag,name,label,maxLength}) => {
  return(
    <div className={styles.formItem}>
        <Tag
          className={Tag === 'textarea' ? styles.textarea : styles.input}
          type="text"
          name={name}
          id={name}
          placeholder=" "
          maxLength={maxLength}
          autoComplete="false"
        />
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        <div className={styles.formItemBar} />
    </div>
  )
}

Input.propTypes = {
  tag:PropTypes.string,
  name:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  maxLength:PropTypes.number,
}

Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
}

export default Input;