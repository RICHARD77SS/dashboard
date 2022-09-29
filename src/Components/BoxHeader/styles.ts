import styled from 'styled-components';

export const BoxHeaderSt = styled.div`
  width: 100%;
  height: 50px;
  padding: 1rem;
  display: flex;
  align-items:center;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  background: ${Props => Props.theme.colors.pri};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
  h3 {
    color: #fff;
  }
  button {
    height: 30px;
    padding: 0 1rem;
    color: #fff;
    font-size: 1rem;
    border-radius: 10px;
    background: ${Props => Props.theme.colors.sec};
  }
`