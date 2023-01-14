import styled from 'styled-components';

export const Top = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items:center;
  gap: .3rem;
  button {
    width: 60px;
    height: 30px;
    border-radius: 5px;
    background: #fff;
  }
`

export const Center = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items:center;
  justify-content:center;
`

export const Options = styled.div`
  display: flex;
  align-items:center;
  gap: .2rem;
  input {
    border: none;
    :focus {
      border: none;
      outline: none;
    }
  }
  button {
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 0 1rem;
    height: 30px;
    border-radius: 2px;
    font-size: 1rem;
    background: ${Props => Props.theme.colors.sec};
  }
`