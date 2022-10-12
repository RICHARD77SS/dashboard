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
`

export const Content = styled.div`
  width: 600px;
  height: 300px;
  border-radius: 20px;
  background: ${Props => Props.theme.colors.bac};
  display: flex;
  align-items:Center;
  justify-content: center;
  flex-direction: column;
`

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  align-items:Center;
  justify-content: center;
  flex-direction: column;
`
