import styled from 'styled-components';

export const BoxContentSt = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items:center;
  flex-direction: column;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  gap: 1rem;
`