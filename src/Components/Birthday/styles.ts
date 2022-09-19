import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`

export const ContainerHeader = styled.div`

`

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  border-radius: 10px;
  background:${Props => Props.theme.colors.bac};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
`

export const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Props => Props.theme.colors.sec};
  padding: 1rem;
`

export const BoxContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 1rem;
`

export const Top = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items:center;
  gap: .3rem;
  button {
    width: 60px;
    height: 30px;
    border-radius: 5px;
    background: #fff;
  }
`

export const Center = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items:center;
  justify-content:space-between;
`

export const Options = styled.div`
  display: flex;
  align-items:center;
  gap: .2rem;
  input {
    border: none;
    :focus {
      border: none;
      outline: none;
    }
  }
  button {
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 0 1rem;
    height: 30px;
    border-radius: 2px;
    font-size: 1rem;
    color: #fff;
    background: ${Props => Props.theme.colors.sec};
  }
`

export const Table = styled.table`
  width: 100%;
  height: auto;
`

export const Thead = styled.thead`

`

export const Tr = styled.tr`

`

export const Th = styled.th`
  border: 1px solid ${Props => Props.theme.colors.sec};
`

export const Tbody = styled.tbody`

`

export const Td = styled.td`
  border: 1px solid ${Props => Props.theme.colors.sec};
`

export const Bottom = styled.div`
  display: flex;
  align-items:center;
  button {
    padding: 0 1rem;
    height: 30px;
    font-size: 1rem;
    background: #f4f4f4;
    border-radius: 1px solid rgba(0,0,0,0.3);
  }
`
