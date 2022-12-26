import styled from 'styled-components'

export const Flexs = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: .3rem;
  button {
    height: 30px;
    padding: 0 1rem;
    background: #fff;
    color: ${Props => Props.theme.colors.pri};
    border: 1px solid ${Props => Props.theme.colors.pri};
    border-radius: 0;
    :last-child {
      color: #eee;
      font-weight: 600;
      background: ${Props => Props.theme.colors.pri};
    }
  }
  input {
    border-radius: 0;
    width: 300px;
  }
`
export const Box = styled.form`
  width: auto;
  max-width: 1200px;
  height: auto;
`