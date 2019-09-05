import React from 'react'
import PropTypes from 'prop-types';

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

  const imgNone = {
    width:'150px',
    height:'150px',
    borderRadius:'50%',
    background:'#000'
  }

  const ImgTag = img ? "img": "div"

  return(
    <div style={itemDiv}>
      <ImgTag 
        src={img} 
        alt= ''
        style={img ? imgS: imgNone}
        />
      <p>{name}</p>
      <p>{prof}</p>
      <p>{desc}</p>
    </div>
  )
}

Item.propTypes = {
  image:PropTypes.string,
  name:PropTypes.string.isRequired,
  prof:PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired
}

Item.defaultProps = {
  image:null
}


export default Item;