import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items:center;
  justify-content: center;
  z-index: 10;
`
export const ModalContent = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  z-index: 30;
  background: ${Props => Props.theme.colors.bac};
  
  button {
    background: ${Props => Props.theme.colors.pri};
    padding: .5rem 1rem;
    border-radius: 10px;
    color: #fff;
  }
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const List = styled.form`
  width: auto;
  min-height: 200px;
  padding: .5rem;
  border: 1px solid ${Props => Props.theme.colors.sec};
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const CloseModal = styled.button`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: rgba(0,0,0,0.4);
`