import React from 'react'
import Form from '../Form/Form';
import {ModalWrapper,BtnClose} from './ModalStyled';

const Modal = ({closeModalFn}) => {
  
  return(
    <ModalWrapper>
      <BtnClose
        onClick={closeModalFn} 
        >x
      </BtnClose>
      <Form />
    </ModalWrapper>
  )
}
export default Modal;