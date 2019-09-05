import React from 'react';

const Title = ({children}) => (

  <h3 style={title}>{children}</h3>
)

const title = {
  fontFamily:'sans-serif',
  fontWeight:'400',
  fontSize:'1.2rem'
}
export default Title;