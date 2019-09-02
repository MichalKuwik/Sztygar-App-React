import React from 'react'
import Item from '../Item/Item';

const ItemWrapper = ({users}) => {

  const list = users.map(item => (
    <Item 
      key={item.name}
      name={item.name}
      img={item.image}
      prof={item.proffesion}
      desc={item.description}
    />
  ))

  return(
    <div>
      {list}
    </div>
  )
}

export default ItemWrapper;