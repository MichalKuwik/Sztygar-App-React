import React from 'react';

const Title = ({children}) => {

  const titleStyle = {
    color:'#7d7d7d',
    fontWeight: 400,
    textTransform:'uppercase',
    fontFamily:'sans-serif',
    margin: 0,
  }

  return(
    <h2 style={titleStyle}>{children}</h2>
  )
}

export default Title;