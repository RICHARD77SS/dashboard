import styled from 'styled-components'


export const AsideSt = styled.form`
  width: 27%;
  min-width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 5px 5px 10px ${Props=>Props.theme.colors.shadow};
`
