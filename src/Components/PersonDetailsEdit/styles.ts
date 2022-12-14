import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  flex-direction: column;
  align-items:center;
  gap: 1rem;
  button {
    padding: 1rem;
    border-radius: 30px;
    background: ${Props => Props.theme.colors.pri};
    font-size: 1rem;
    color: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
  }
`
export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  gap: 1rem;
`
export const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  textarea {
    width: 100%;
    min-height: 100px;
  }
  input[type=checkbox]{
    max-width: 20px;
    height: 20px;
  }
  .green {
    color: green;
  }
  .red{
    color: red;
  }
`
export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  flex-direction: column;
  flex: 1;
`
export const Imagem = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items:center;
  flex-direction: column;
  
  img{
    width: 100%;
    height: 100%;
  }
`
export const BoxContent = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items:start;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  background: ${Props => Props.theme.colors.bac};
  gap: 1rem;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
  select {
    width: 100%;
    min-width: 200px;
    height: 30px;
    background: #eee;
    border-radius: 5px;
    border-color: #ddd;
  }
  input {
    width: 200px;
    height: 30px;
    background: #eee;
    border-radius: 5px;
    border-color: #ddd;
  }
`
export const ModalContainer = styled.div`
  position:fixed;
  display: flex;
  align-items:center;
  justify-content:center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255,255,255,0.4);
`
export const Modal = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  gap: 2rem;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
  button {
    padding: 1rem;
    border-radius: 30px;
    background: ${Props => Props.theme.colors.pri};
    font-size: 1rem;
    color: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
    :last-child{
      background: #f00;
    }
  }
`
