import React from 'react';
import PropTypes from 'prop-types';
import image from '../../assets/img/tools.png';
import AppContext from '../../context';
import {ItemWrapper,DelButton,Paragrph} from './ItemStyled';
import img from '../../assets/img/miner.png';



const Item = ({name,proffesion,description}) => {
  
    const stylImage = {
      width:'50px',
      height:'50px'
    }

    const imgNone = {
      margin:'auto',
      width:'150px',
      height:'150px',
      borderRadius:'50%',
      background: "url('../../assets/img/miner1.png')",
      backgroundSize: '100%',
      backgroundPosition:'center',
  }

    const ImgTag = img ? "img" : "div"

  return(

    <AppContext.Consumer>
      {(context => (
        <ItemWrapper>
        {proffesion && <ImgTag 
           style={imgNone}
           src={img} 
           alt={name} 
         />}
         {name && <Paragrph>{name}</Paragrph>}
         <Paragrph proff>{proffesion}</Paragrph>
         <Paragrph>{description}</Paragrph>
         {!proffesion ? <img style={stylImage} src={image} alt=""/>: null}
         
         <DelButton 
          onClick={() => context.deleteItem(name)}
         >X
         </DelButton>
       </ItemWrapper>
      ))}
    </AppContext.Consumer>
    
  )
}

Item.propTypes = {
  name: PropTypes.string,
  proffesion: PropTypes.string,
  description:PropTypes.string
}


export default Item;