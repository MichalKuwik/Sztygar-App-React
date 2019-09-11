import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({id,checked,changeFn,children}) => {
  return(
    <label className={styles.radio}>
      <input 
        type="radio"
        id={id}
        checked={checked}
        onChange={changeFn}
        />
      <div className={styles.radioButton}>{children}</div>
    </label>
  )
}

export default Radio;