import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width:767px){
    width:90%;
  }
`

export const FormTag = styled.form`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const RadioWrapper = styled.div`
@media screen and (max-width:767px){
  margin:1rem auto;
}
`