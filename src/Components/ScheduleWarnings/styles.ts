import styled from 'styled-components'

export const Buttons = styled.button`
  height: 30px;
  padding: 0 1rem;
  border-radius: 20px;
  display: flex;
  align-items:center;
  justify-content: center;
  color: #fff;
  background: ${Props => Props.theme.colors.sec};
  border: none;
`