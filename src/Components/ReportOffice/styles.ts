import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
`

export const Table = styled.table`
  width: 100%;
  height: auto;
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