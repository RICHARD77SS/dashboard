import styled from 'styled-components';

export const ButtonCont = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: end;
  padding: 1rem;
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.sec};
    color: #fff;
    font-size: 1rem;
  }
`