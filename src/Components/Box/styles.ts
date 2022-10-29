import styled from 'styled-components';

interface Props {
  width?: string;
  height?: string;
}
export const BoxSt = styled.div<Props>`
  width: ${Props => Props.width};
  max-width: 1200px;
  height: ${Props => Props.height};
`