import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items:Center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.4);
  z-index:100;
`

export const Content = styled.div`
  width: 600px;
  height: auto;
  border-radius: 20px;
  background: ${Props => Props.theme.colors.bac};
  display: flex;
  align-items:Center;
  justify-content: center;
  flex-direction: column;
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
export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  align-items:Center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`
