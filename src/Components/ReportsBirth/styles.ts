import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  flex-direction: column;
    button {
    padding: 0 1rem;
    height: 40px;
    border-radius: 20px;
    color: #fff;
    background: ${Props => Props.theme.colors.pri};
    display: flex;
    align-items:Center;
    justify-content: center;
    font-size: 1rem;
    :hover {
      filter: brightness(.8);
    }
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`
export const Graph = styled.div`
  width: 100%;
  min-height: 400px;
  height: auto;
  padding: 1rem;
`
