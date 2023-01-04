import styled from 'styled-components'

export const Closed = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${Props => Props.theme.colors.border};
  z-index: 100;
`