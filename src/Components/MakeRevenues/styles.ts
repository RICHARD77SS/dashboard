import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`

export const Form = styled.form`
  width: auto;
  max-width: 900px;
  height: auto;
  z-index: 100;
  select {
    width: 150px;
  }
  textarea {
    min-width: 200px;
    min-height: 120px;
    max-width: 200px;
    max-height: 120px;
  }
  
`
export const Close = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.4) !important;
  z-index: 10;
`