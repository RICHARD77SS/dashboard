import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
export const Box = styled.div`
  min-width: 300px;
  flex: 1;
  min-height: 300px;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
`
export const BoxHeader = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  border-bottom: 1px solid ${Props => Props.theme.colors.pri};
  filter: brightness(.8);
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.pri};
    margin: 0 .5rem;
  }
  h3 {
    margin: 0 .5rem;
  }
`
export const BoxContent = styled.div`
  width: 100%;
  min-height: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
  padding:.51rem;
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.sec};
  }
`
export const BoxRet = styled.div`
  flex: 1;
  height: 120px;
  border-radius: 10px;
  border: 1px solid ${Props => Props.theme.colors.sec};
  background: ${Props => Props.theme.colors.bac};
`
export const BoxRetHeader = styled.header`
  width: 100%;
  height: 30%;
  display: flex;
  align-items:center;
  justify-content: space-between;
  h3 {
    color:${Props => Props.theme.colors.sec};
  }
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.sec};
  }

`
export const BoxRetContent = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  input{
    min-width: 40px;
    height: 30px;
    border: .5px solid ${Props => Props.theme.colors.sec};
  }
  p{
    font-size: .9rem;
  }
  span {
    font-size: 1rem;
    color: ${Props => Props.theme.colors.pri};
  }
`
export const DivLink = styled.div`
  width: auto;
  height: 30px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  background: #ccc;
  border: .5px solid ${Props => Props.theme.colors.sec};
`
export const LinkPub = styled.div`
  width: 100%;
  height: 70%;
`
export const BoxGrid = styled.div`
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-areas: 
  "g1 g1 g1 g1 g2 g2"
  "g3 g3 g4 g4 g2 g2"
  "g3 g3 g4 g4 g2 g2"
  "g3 g3 g4 g4 g2 g2 "
  "g5 g5 g5 g5 g6 g6"
  "g5 g5 g5 g5 g6 g6"
  "g5 g5 g5 g5 g6 g6"
  ;
  gap: 1rem;
  .grid1{grid-area: g1;justify-content: center;}
  .grid2{grid-area: g2;flex-direction: column;}
  .grid3{grid-area: g3;flex-direction: column;}
  .grid4{grid-area: g4;flex-direction: column;}
  .grid5{grid-area: g5;}
  .grid6{grid-area: g6;}
`
export const GridBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
`
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 1rem;
  margin: 0 1rem;
`
export const BoxFooter = styled.div`
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  justify-content: center;
`
export const Classification = styled.div`
  display: flex;
  align-items: center;
  margin: 0 .2rem;
  p{
    font-size: .8rem;
  }
`
export const BoxColor = styled.div`
  width: 40px;
  height: 10px;
  border: 1px solid red;
  margin: 0 .2rem;
`
export const Cad = styled.div`
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
`
export const CadHeader = styled.div`

`
export const CadContent = styled.div`
  
`
export const GraphContainer = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
`
export const GraphHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    margin: 0 1rem;
  }
`
export const Datalist = styled.div`
  margin: 0 1rem;
`
export const GraphContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Data = styled.div`
  display: flex;
  align-items: center;
`
export const Graph = styled.div`
  width: 90%;
  height: 250px;
  background: #fff;
`
export const Birt = styled.div`
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
`
export const BirtHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 1px solid ${Props => Props.theme.colors.pri};
`
export const BirtContent = styled.div`

`
export const Status = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  p{
    text-align:center;
    width: 80%;
  }
`
export const Situation = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`
export const Description = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin: .3rem;
  }
  p{

  }
`
export const Divf = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Output = styled.div`
  width: 100%;
  height: 40px;
  background: #ccc;
`