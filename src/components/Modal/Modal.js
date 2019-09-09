import React from 'react';
import Form from '../Form/Form';

const Modal = ({closeModalFn}) => {
  
  const modalWrapper = {
    position: 'fixed',
    top:'50%',
    left:0,
    right:0,
    transform: 'translateY(-56%)',
    width:'40vw',
    height: '80vh',
    background: '#0a1623',
    border:'1px solid #818181',
    boxShadow: '0 20px 40px -10px rgba(#818181, .5)',
    margin:'0 auto'
  }

  const closeBtn = {
    background: '#00d548',
    border:'none',
    color:'#fff',
    padding:'3px 10px',
    fontSize:'1rem',
    fontWeight: 300,
    position: 'absolute',
    right:'2%',
    top:'2%',
  }

  return(
    <div style={modalWrapper}>
      <button 
        onClick={closeModalFn}
        style={closeBtn}>x</button>
      <Form />
    </div>
  )
}

export default Modal;