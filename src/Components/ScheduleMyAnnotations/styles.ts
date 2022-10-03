import styled from 'styled-components'

export const Flex1 = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  display: flex;
  align-items:flex-start;
`
export const Notes = styled.div`
  width: 30%;
  height: 200px;
  background: #777;
  border-radius: 10px;
`
export const TopNotes = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items:Center;
  justify-content: center;
  gap: .5rem;
  padding: 1rem;
  background: #555;
  border-radius: 10px 10px 0 0;
  button {
    font-size: 1.2rem;
    color: #fff;
  }
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