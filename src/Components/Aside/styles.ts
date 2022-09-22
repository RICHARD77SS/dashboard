import styled from 'styled-components'


export const AsideSt = styled.div`
  width: 30%;
  max-width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  gap: 1rem;
  background: ${Props => Props.theme.colors.bac}
`
