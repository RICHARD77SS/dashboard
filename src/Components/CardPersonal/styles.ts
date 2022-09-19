import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`
export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
`
export const BoxHeader = styled.header`
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  padding: 0 1rem;
  border-bottom: 1px solid ${Props => Props.theme.colors.sec};
`
export const BoxContent = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Top = styled.div`
  width: 100%;
  display: flex;
`
export const Table = styled.table`
  width: 100%;
`
export const THead = styled.thead`

`
export const Tr = styled.tr`

`
export const Th = styled.th`
  border: 1px solid ${Props => Props.theme.colors.sec};
`
export const TBody = styled.tbody`

`
export const Td = styled.td`
  border: 1px solid ${Props => Props.theme.colors.sec};
`