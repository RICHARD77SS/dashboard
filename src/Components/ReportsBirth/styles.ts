import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  flex-direction: column;
`
export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  button {
    padding: 0 1rem ;
    background: ${Props => Props.theme.colors.sec};
    height: 30px;
    border-radius: 20px;
    font-size: 1rem;
    color:#fff;
  }
`
export const Graph = styled.div`
  width: 100%;
  min-height: 400px;
  height: auto;
  padding: 1rem;
`
