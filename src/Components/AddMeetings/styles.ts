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
  z-index: 30;
  background: ${Props => Props.theme.colors.bac};
`
export const Form = styled.form`

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