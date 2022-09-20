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
export const Graph = styled.div`
  width: 100%;
  min-height: 400px;
  height: auto;
  padding: 1rem;
`
export const Reference = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 1rem;
`
export const Classification = styled.div`
  display: flex;
  align-items: center;
  margin: 0 .2rem;
  .a{
    background: #00BFFF;
  }
  .b{
    background: #32CD32;
  }
  .c{
    background: #FF4500;
  }
  .d{
    background: #9400D3;
  }
  .e{
    background: #FFE4C4;
  }
  .f{
    background: #0000FF;
  }
  .g{
    background: #8B4513;
  }
  p{
    font-size: .8rem;
  }
`
export const BoxColor = styled.div`
  width: 40px;
  height: 10px;
  margin: 0 .2rem;
  
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