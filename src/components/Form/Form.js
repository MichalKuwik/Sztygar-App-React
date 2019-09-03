import React from 'react'

const Form = ({submitFn}) => {
  return(
    <form onSubmit={submitFn}>
      <input type="text"/>
      <input type="text"/>
      <input type="text"/>
      <input type="text"/>
      <button type="submit">Add new</button>
    </form>
  )
}

export default Form;