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
        <div 
          className={styles.item}
          >
        {proffesion && <ImgTag 
           className={img ? styles.img : styles.imgNone}
           src={img} 
           alt={name} 
         />}
         {name && <p className={styles.p}>{name}</p>}
         <p className={styles.p_prof}>{proffesion}</p>
         <p className={styles.p}>{description}</p>
         {!proffesion ? <img style={stylImage} src={image} alt=""/>: null}
         
         {/* <button onClick={() => context.deleteItem(name)}>X</button> */}
       </div>
      ))}
    </AppContext.Consumer>
    
  )
}

Item.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  proffesion: PropTypes.string,
  description:PropTypes.string.isRequired
}

Item.defaultProps = {
  img:null
}

export default Item;