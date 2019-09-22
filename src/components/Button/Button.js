import React from 'react';
import {ButtonAction} from './ButtonStyled';

const Button = ({children,secondary,openModalFn,...props}) => {

  // const btnClass = secondary ? styles.secondary: styles.btn

  return(
    <ButtonAction
      onClick={openModalFn}
      >{children}
    </ButtonAction>
  )
}

export default Button;