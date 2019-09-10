import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input.js';
import Button from '../Button/Button';
import Title from '../Title/Title';
import PropTypes from 'prop-types';

const Form = ({submitFn}) => {
  return(
   <div className={styles.wrapper}>
    <Title>Add new account</Title>
    <form 
      className={styles.form} 
      onSubmit={submitFn}
      autoComplete="off"
      >
      <Input 
        name="image"
        label="zdjęcie"
        />
        <Input 
        name="name"
        label="imię i nazwisko"
        maxLength={30}
        />
        <Input 
        name="proffesion"
        label="stanowisko"
        />
        <Input
        tag="textarea" 
        name="description"
        label="opis"
        />
      <Button>add new item</Button>
    </form>
  </div>
  )
}

Form.propTypes = {
  submitFn: PropTypes.func.isRequired
}


export default Form;