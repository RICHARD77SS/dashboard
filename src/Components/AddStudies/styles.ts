import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  display: flex;
  align-items:flex-start;
  gap: 1rem;
  margin: 1rem;
`
export const Box = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  border-radius: 10px;
  background-color: ${Props => Props.theme.colors.bac};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
`
export const Top = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  flex-direction: column;
  align-items: center;
`
export const Flex = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: 1rem;
  input {
    width: 120px;
    height: 35px;
    flex: 1;
  }
  button {
    height: 35px;
    padding: 0 1rem;
    border: 1px solid black;
    border-radius: 5px;
    background: ${Props => Props.theme.colors.sec};
    color: #fff;
    :last-child {
      background: #fff;
      color: #000;
    }
  }
`
export const TextEdits = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  flex-wrap: wrap;
  padding: 1rem;
  gap: .5rem;
  background: #f4f4f4;
`
export const TextArea = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  .ql-container {
    min-height: 600px;
  }
`
export const Aside = styled.div`
  width: 20%;
  min-width: 150px;
  height: auto;
  display: flex;
  align-items:center;
  flex-direction: column;
  gap: 1rem;
`
export const MiniBox = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
  button {
    border: 1px solid  ${Props => Props.theme.colors.pri};
    padding: 1rem;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.pri};
    color:#fff;
    font-size: 1rem;
    :last-child {
      background: #fff;
      color: ${Props => Props.theme.colors.pri};
    }
  }
`