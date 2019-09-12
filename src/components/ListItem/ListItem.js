import React from 'react';
import Item from '../Item/Item';



const ListItem = ({users}) => {
  
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
    <span>
      {usersList}
    </span>
  )
}


export default ListItem;