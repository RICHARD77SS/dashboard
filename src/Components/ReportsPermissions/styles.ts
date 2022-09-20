import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  flex-direction: column;
`
export const Header = styled.div`
 width: 100%;
  display: flex;
  align-items:center;
  gap: 1rem;
  padding: 1rem;
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 10px;
    background: ${Props => Props.theme.colors.sec};
    color: #fff;
  }
`
export const Foto = styled.div`
  width: 100px;
  height: 100px;
  background: #ccc;
  border-radius: 10px;
`
export const Block = styled.div`
  flex:1;
  width: auto;
  display: flex;
  align-items:start;
  flex-direction: column;
`
export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
`
export const Top = styled.div`
  width: 100%;
  height: 40px;
  padding: 1rem;
  display: flex;
  align-items: center;
`
export const Center = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 1rem;
  align-items:center;
  justify-content: flex-end;
  gap: .5rem;
`
export const Options = styled.div`
  height: auto;
  display: flex;
  flex: 1;
  gap: 0.5rem;
  button {
    background: ${Props => Props.theme.colors.sec};
    padding: 0 1rem;
    height: 40px;
    color: #fff;
    font-size: 1rem;
    border-radius: 5px; 
    :hover {
      filter: brightness(1.3);
    }
  }
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
  :nth-child(odd){
    background: #eee;
  }
`
export const Th = styled.th` 
  border: 1px solid ${Props => Props.theme.colors.sec};
  height: 40px;
`
export const Td = styled.td`
  border: 1px solid ${Props => Props.theme.colors.sec};
  height: 40px;
  
`
export const Pages = styled.div`
  height: auto;
  display: flex;
  button {
    border: 1px solid ${Props => Props.theme.colors.pri};
    padding: 0 1rem;
    height: 40px;
    color: ${Props => Props.theme.colors.pri};
    font-size: 1rem;
    border-radius: 5px; 
    :hover {
      filter: brightness(1.3);
    }
    :nth-child(2) {
      background: ${Props => Props.theme.colors.pri};
      color: #fff;
    }
  }
`