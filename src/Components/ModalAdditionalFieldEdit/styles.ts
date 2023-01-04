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
  z-index: 150;
  button {
    border-radius: 20px;
    background: ${Props => Props.theme.colors.red};
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.4);
    color: ${Props => Props.theme.colors.pri};
    padding: .5rem;
  }
  button[type=submit] {
    background: ${Props => Props.theme.colors.green};
    color: #fff;
  }
  button[name=new] {
    background: ${Props => Props.theme.colors.bac};
    color: ${Props => Props.theme.colors.text};
  }
`