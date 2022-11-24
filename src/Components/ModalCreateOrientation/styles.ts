import styled from 'styled-components';


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
`

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
    border-radius: 20px;
    background: ${Props => Props.theme.colors.pri};
    color: #fff;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.4);
    :last-child {
      background: #090;
      padding: .5rem 1rem;
    }
    :first-child {
      color: #900;
      background: #fff;
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

