import React from 'react'

const Item = ({name,img,prof,desc}) => {

  const imgS = {
    width:'150px',
    height:'150px',
    borderRadius:'50%',
  }

  const itemDiv = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    margin:'3rem 0',
    width:'300px',
    textAlign:'center',
    border:'1px solid #2c3946',
    padding:'20px',
    borderRadius:'10px'

  }

  return(
    <div style={itemDiv}>
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