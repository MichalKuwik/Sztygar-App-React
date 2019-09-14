import React from 'react';
import Item from '../Item/Item';



const ListItem = ({users}) => {
  
  const wrapper_list = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  }

  const usersList = users.map(item => (
    <Item 
      key={item.name}
      img={item.image}
      name={item.name}
      proffesion={item.proffesion}
      description={item.description}
      />
  ))

  return(
    <div style={wrapper_list}>
      {usersList}
    </div>
  )
}


export default ListItem;