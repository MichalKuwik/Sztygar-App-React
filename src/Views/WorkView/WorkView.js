import React from 'react';
import AppContext from '../../context';
import ListItem from '../../components/ListItem/ListItem';

const WorkView = () => {


  return(
    <AppContext.Consumer>
      {(context) => (
        <>
          <h3 style={{
          textAlign:'center',
          fontWeight:'400',
          color:'#818181',
          fontSize:'2rem',
          }}>Roboty do wykonania ({context.works.length})</h3>
          <ListItem users={context.works}/>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default WorkView;