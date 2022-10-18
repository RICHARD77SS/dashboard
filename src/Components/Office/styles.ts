import styled from 'styled-components'



export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
`
export const Offices = styled.div`
  width: 50%;
  display: flex;
  align-items:center;
  flex-direction: column;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
`

export const OfficeHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items:center;
  padding: 0 1rem;
  border-bottom: 1px solid ${Props => Props.theme.colors.sec};
  
`

export const OfficeContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  button {
    padding: .5rem;
    background:  ${Props => Props.theme.colors.pri};
    border-radius: 5px;
    color: #fff;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
`

export const AddHeader = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  background: ${Props => Props.theme.colors.pri};
  border-radius: 10px 10px 0 0;
`

export const AddContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  button {
    padding: 0 1rem;
    height: 40px;
    border-radius: 10px;
    color: #fff;
    background: ${Props => Props.theme.colors.pri};
  }

`

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border-color: ${Props => Props.theme.colors.pri};
  }
`
