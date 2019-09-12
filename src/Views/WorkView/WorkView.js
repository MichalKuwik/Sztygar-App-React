import React from 'react';
import AppContext from '../../context';
import ListItem from '../../components/ListItem/ListItem';

const WorkView = () => {


  return(
    <AppContext.Consumer>
      {(context) => (
        <>
         
          <ListItem users={context.works}/>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default WorkView;