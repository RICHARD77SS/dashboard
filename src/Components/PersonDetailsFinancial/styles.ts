import styled from 'styled-components';

export const Box =  styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 1rem;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  gap: 1rem;
`

export const Top =  styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  gap: 1rem;
  button {
    padding: .5rem 1rem;
    border-radius: 20px;
    color: #fff;
    background: #090;
    :last-Child {
      background: #900;
    }
  }
`

export const TableContainer =  styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;

`
