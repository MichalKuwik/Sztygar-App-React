import React from 'react'
import Item from '../Item/Item';
import PropTypes from 'prop-types';

const ItemWrapper = ({users,deleteItem}) => {

  const list = users.map(item => (
    <Item 
      key={item.name}
      id={item.name}
      name={item.name}
      img={item.image}
      prof={item.proffesion}
      desc={item.description}
      deleteItem={deleteItem}
    />
  ))

  return(
    <div>
      {list}
    </div>
  )
}

ItemWrapper.propTypes = {
  users:PropTypes.array.isRequired,
  deleteItem:PropTypes.func.isRequired
}

export default ItemWrapper;