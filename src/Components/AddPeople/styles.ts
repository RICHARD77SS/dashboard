import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:  center;
`

export const Form = styled.form`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:  center;
  padding: 1rem;
  gap: 1rem;
  button {
    width: 300px;
    height: 40px;
    border-radius: 30px;
    font-size: 1rem;
    background: ${Props => Props.theme.colors.pri};
    box-shadow: 5px 5px 5px ${Props => Props.theme.colors.shadow};
  }
  label {
    font-weight: 600;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items:  start;
  gap: 1rem;
`

export const Fieldset = styled.fieldset`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:  center;
  gap: 1rem;
  border: none;
`

export const Data = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:  center;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  input {
    height: 30px;
    border-color: ${Props => Props.theme.colors.text};
    background: #dde;
  }
  input[type=radio]{
    width: 20px;
    height: 20px;
  }

`

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid ${Props => Props.theme.colors.sec};
`
export const DataContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:  center;
  padding: 1rem;
  gap: 1rem;
`
export const Flex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  gap: 1rem;
`

export const Block = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items:  start;
  padding: .5rem 0;
  input,select{
    width: 100%;
    height: 30px;
    border-color: ${Props => Props.theme.colors.text};
    background: #dde;
    color: #000;
  }
  input[type=checkbox]{
    width: 30px;
    height: 30px;
  }
  p{
    width: 50%;
  }
`

export const Foto = styled.div`
  width: 120px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items:  start;
  background: #ddd;
  img {
    width: 100%;
    height: 100%;
  }
`

export const InputBlock = styled.div`
  width: 60%;
  Input {
    width: 100%;
  }
`
export const Scroll = styled.div`
  width: 100%;
  height: 150px;
  overflow-y: scroll;
  display: flex;
  align-items:center;
  gap:.5rem;
  padding: 1rem;
  flex-direction:column
`