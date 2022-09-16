import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background: ${Props => Props.theme.colors.sec};;
`

