import styled from 'styled-components';

export const BoxContentSt = styled.div`
  width: 100%;
  height: auto;
  min-height: 300px;
  padding: 1rem;
  display: flex;
  align-items:center;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  background: ${Props => Props.theme.colors.bac};
  gap: 1rem;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
  button {
    height: 30px;
    padding: 0 1rem;
    color: #fff;
    font-size: 1rem;
    border-radius: 10px;
    background: ${Props => Props.theme.colors.sec};
  }
`