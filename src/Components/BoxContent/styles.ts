import styled from 'styled-components';


interface Props {
  width?: string;
  height?: string;
}
export const BoxContentSt = styled.div<Props>`
  width: ${Props => Props.width};
  height: ${Props => Props.height};
  padding: 1rem;
  display: flex;
  align-items:center;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  background: ${Props => Props.theme.colors.bac};
  gap: 1rem;
  box-shadow: 5px 5px 10px ${Props => Props.theme.colors.shadow};
  button {
    height: 30px;
    padding: 0 1rem;
    font-size: 1rem;
    border-radius: 10px;
    background: ${Props => Props.theme.colors.sec};
  }
`