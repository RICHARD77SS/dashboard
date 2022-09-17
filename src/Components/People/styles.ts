import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  gap: 1rem;
`
export const Box = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Props => Props.theme.colors.bac};
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
`
export const BoxHeader = styled.header`
  width: 100%;
  height: 50px;
  padding: 1rem;
  display: flex;
  align-items:center;
  border-bottom: 1px solid ${Props => Props.theme.colors.pri};

`
export const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 1rem;
`
export const Top = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items:center;
  justify-content: space-between;
`
export const Results = styled.div`
  display: flex;
  align-items:center;
  height: 50px;
  input{
    width: 80px;
    height: 40px;
  }
`
export const Options = styled.div`
  display: flex;
  align-items:center;
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
export const TableContainer = styled.table`
  width: 100%;
  height: auto;
  display: flex;
  overflow-x: scroll;
  background: #f4f4f4;
`
export const Table = styled.table`
  width: 100%;
  height: auto;
`
export const Tr = styled.tr`
  display: flex;
`
export const Th = styled.th` 
  min-width: 180px;
  height: 50px;
  padding: 0 1rem;
  display: flex;
  align-items:center;
  border: 1px solid blue;
`
export const Td = styled.td`
  min-width: 180px;
  height: 50px;
  padding: 0 1rem;
  display: flex;
  align-items:center;
  border: 1px solid blue;
`
export const Page = styled.div`
  display: flex;
  align-items:center;
  button {
    height: 40px;
    padding: 0 1rem;
    background: ${Props => Props.theme.colors.sec};
    font-size: 1rem;
    color: #fff;
    :nth-child(2){
      background: #fff;
      color: #000;
    }
    :hover {
      filter: brightness(1.3);
    }
  }
`
export const Aside = styled.aside`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  border-radius: 10px;
  gap: 1rem;
  button{
    width: 100%;
    height: 40px;
    color: #fff;
    font-size: 1.4rem;
    background: ${Props => Props.theme.colors.sec};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    :hover {
      filter: brightness(1.3);
    }
  }
`
export const Filters = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items:center;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
`
export const FilterHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items:center;
  justify-content:center;
  background: #ccc;
  border-bottom: 1px solid ${Props => Props.theme.colors.pri};
  border-radius: 10px 10px 0 0;
`
export const FilterOptions = styled.div`
  width: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  background: ${Props => Props.theme.colors.bac};
  border-radius:0 0 10px 10px;
  overflow-y: scroll;
  input {
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    :focus {
      outline: none;
    }
  }
`
export const GroupType = styled.div`
h4 {
  margin: 1rem 0;
}
`
export const InputGroup = styled.div`


`
export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  gap: .5rem;
  margin: .3rem 0;
`