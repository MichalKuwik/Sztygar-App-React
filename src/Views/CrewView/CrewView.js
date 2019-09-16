import React from 'react';
import AppContext from '../../context';
import ListItem from '../../components/ListItem/ListItem';

const CrewView= () => {
  return(
    <AppContext.Consumer>
      {(context) => (
        <>
        <h3 style={{
          textAlign:'center',
          fontWeight:'400',
          color:'#818181',
          fontSize:'2rem',
          }}>Dostępni pracownicy</h3>
        <ListItem users={context.crew}/>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default CrewView;