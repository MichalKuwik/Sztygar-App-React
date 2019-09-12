import React from 'react';
import AppContext from '../../context';
import ListItem from '../../components/ListItem/ListItem';

const CrewView= () => {
  return(
    <AppContext.Consumer>
      {(context) => (
        <ListItem users={context.crew}/>
      )}
    </AppContext.Consumer>
  )
}

export default CrewView;