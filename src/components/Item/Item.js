import React from 'react'

const Item = ({name,img,prof,desc,deleteItem}) => {

  const imgS = {
    width:'150px',
    height:'150px',
    borderRadius:'50%',
  }

  return(
    <div>
      <button onClick={() => deleteItem(name)}>X</button>
      <img 
        src={img} 
        alt= ''
        style={imgS}
        />
      <p>{name}</p>
      <p>{prof}</p>
      <p>{desc}</p>
    </div>
  )
}

export default Item;