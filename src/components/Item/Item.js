import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css'
import image from '../../assets/img/tools.png';
import AppContext from '../../context';

const Item = ({name,img,proffesion,description}) => {
  
    const stylImage = {
    width:'50px',
    height:'50px',
  }

    const ImgTag = img ? "img" : "div"

  return(

    <AppContext.Consumer>
      {(context => (
        <div style={item}>
        {img && <ImgTag 
           className={img ? styles.img : styles.imgNone}
           src={img} 
           alt={name} 
         />}
         {name && <p className={styles.p}>{name}</p>}
         <p>{proffesion}</p>
         <p>{description}</p>
         {name || description && !proffesion ? <img style={stylImage} src={image} alt=""/>: null}
         
         {/* <button onClick={() => context.deleteItem(name)}>X</button> */}
       </div>
      ))}
    </AppContext.Consumer>
    
  )
}

Item.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  proffesion: PropTypes.string.isRequired,
  description:PropTypes.string.isRequired
}

Item.defaultProps = {
  img:null
}

const item = {
  width:'40vw',
  margin:'2rem',
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border:'1px solid #fff',
  borderRadius:'20px',
  padding:'15px'
}

 




export default Item;