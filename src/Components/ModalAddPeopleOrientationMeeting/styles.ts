import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  height: 100%;
  background: ${Props => Props.theme.colors.bac};
  border-radius: 10px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  gap: 1rem;
  padding: 1rem;
   button {
    padding: .5rem;
    background: ${Props => Props.theme.colors.sec};
    color: #fff;
    border-radius: 5px;
    :first-child{
      background: #d00;
    }
  }
`
export const ModalClose = styled.button`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: rgba(0,0,0,0.4);
  z-index:10;
`
export const ModalContainer = styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:5;

`
export const ModalContent = styled.div`
  width: 500px;
  height: auto;
  z-index: 20;
  padding: 1rem;
`