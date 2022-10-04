import styled from 'styled-components'

export const Buttons = styled.button`
  min-height: 40px;
  padding: 0 1rem;
  border-radius: 20px!important; 
  display: flex;
  align-items:center;
  justify-content: center;
  color: #fff;
  background: ${Props => Props.theme.colors.sec};
  border: none;
  :hover{
    filter: brightness(.7);
  }
`