import React from 'react';
import {Label,RadioInput,RadioWrapper} from './RadioStyled';

const Radio = ({id, checked, changeFn, children}) => (
  <Label>
    <RadioInput
      id={id}
      type="radio"
      checked={checked}
      onChange={changeFn}
    />
    <RadioWrapper></RadioWrapper>
  {children}
  </Label>
)

export default Radio;