import React from 'react'
import AppContext from '../../context';
import ListItem from '../../components/ListItem/ListItem';

const RaportsView = () => {
  return(
    <AppContext.Consumer>
      {(context) => (
        <>
        <h3 style={{
          textAlign:'center',
          fontWeight:'400',
          color:'#818181',
          fontSize:'2rem',
          }}>Raporty ({context.raports.length})</h3>
        <ListItem users={context.raports}/>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default RaportsView;