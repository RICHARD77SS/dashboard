import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    color: #fff;
    background: ${Props => Props.theme.colors.sec};
    font-size: 1rem;
  }
`

export const InputBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Form = styled.form`
  width: 30%;
  min-width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  select,input {
    width: 260px;
    height: 30px;
    border-radius: 5px;
    border-color: #eee;
  }
  textarea{
    max-width: 290px;
    max-height: 300px;
  }
`
