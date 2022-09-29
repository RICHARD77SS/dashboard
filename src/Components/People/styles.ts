import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  overflow-x: scroll;
  background: #f4f4f4;
`

export const Buttonb = styled.div`
  padding: 0 1rem;
  height: 40px;
  border-radius: 20px;
  color: #fff;
  background: ${Props => Props.theme.colors.pri};
  display: flex;
  align-items:Center;
  justify-content: center;
  :hover {
    filter: brightness(.8);
  }
  a {
    text-decoration: none;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    align-items:Center;
    justify-content: center;
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
  padding: .5rem;
  background: ${Props => Props.theme.colors.bac};
  border-radius:0 0 10px 10px;
  overflow-y: scroll;
  input {
    min-height: 40px;
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
  height: 30px;
  display: flex;
  align-items:center;
  gap: .5rem;
`