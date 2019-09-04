import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input.js';
// import Button from '../Button/Button';
// import Title from '../Title/Title';

const Form = ({submitFn}) => {
  return(
   <div className={styles.wrapper}>
    {/* <Title>Add new twitter account</Title> */}
    <form className={styles.form} onSubmit={submitFn}>
      <Input 
        name="name"
        label="name"
        maxLength={30}
        />
        <Input 
        name="twitterLink"
        label="twitterLink"
        />
        <Input 
        name="image"
        label="image"
        />
        <Input
        tag="textarea" 
        name="description"
        label="description"
        />
      {/* <Button>add new item</Button> */}
    </form>
  </div>
  )
}

export default Form;