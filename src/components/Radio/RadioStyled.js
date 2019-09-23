import styled from 'styled-components';

export const RadioWrapper = styled.div`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #7d7d7d;
`

export const RadioInput = styled.input`
  opacity:0;
  position:absolute;

  &:checked + ${RadioWrapper}{
    transition: all 0.2s ease-in;
    opacity:1;
    background: #00d548;
    border: 2px solid #7d7d7d;
    transform: scale(1.3);
  }
`
export const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: 20px 5px 30px 0;
  font-weight: 700;
  color: #00d548;
`
