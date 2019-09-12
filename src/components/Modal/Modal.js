import React from 'react'
import styles from './Modal.module.css';
import Form from '../Form/Form';

const Modal = ({closeModalFn}) => {
  
  return(
    <div 
      className={styles.wrapper}>
      <button
        onClick={closeModalFn} 
        className={styles.closeBtn}
        >x</button>
      <Form />
    </div>
  )
}
export default Modal;