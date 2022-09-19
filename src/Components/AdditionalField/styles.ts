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
export const Field = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
`
export const Header = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${Props => Props.theme.colors.sec};
  display: flex;
  align-items: center;
  padding: 1rem;
`
export const FieldContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`
export const Table = styled.table`
  width: 100%;
`
export const Tbody = styled.tbody`

`
export const Thead = styled.thead`

`
export const Tr = styled.tr`

`
export const Th = styled.th`
  border: 1px solid ${Props => Props.theme.colors.sec};
`
export const Td = styled.td`
  border: 1px solid ${Props => Props.theme.colors.sec};
`
export const AddField = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
`
export const FieldHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`
export const Box = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: 1px solid ${Props => Props.theme.colors.sec};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
`
export const BoxHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 1rem;
`
export const BoxContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: .5rem;
  padding: .5rem;
  button {
    padding: 0 1rem;
    height: 40px;
    border-radius: 10px;
    color: #fff;
    background: ${Props=>Props.theme.colors.pri};
  }
`
export const InputContainer = styled.div`
  display: flex;
  align-items:center;
`
export const InputContainerB = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`