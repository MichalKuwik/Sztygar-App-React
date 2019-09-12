import React from 'react'
import AppContext from '../../context';
import ListItem from '../../components/ListItem/ListItem';

const RaportsView = () => {
  return(
    <AppContext.Consumer>
      {(context) => (
        <ListItem users={context.raports}/>
      )}
    </AppContext.Consumer>
  )
}

export default RaportsView;