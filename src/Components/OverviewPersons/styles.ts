import styled from 'styled-components';



export const Flex = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 1rem;
  align-items:center;
  flex-direction: column;
  @media (max-width: 1100px) {
    flex-direction: row;
  }
  @media (max-width: 768px){
    flex-direction: column;
  }
`
export const Grid1 = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  border: 1px solid ${Props => Props.theme.colors.pri};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
`
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  font-size: 1rem;
  padding: 1rem;
  margin: 1.4rem;
  color: #00f;
  :first-child{
    color:#000;
  }
  :last-child {
    color: #f00;
  }

`
export const GraphContainer = styled.div`
  width: 90%;
  max-width: 300px;
  min-width: 300px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  @media (max-width:768px){
    width: 400px;
    max-width: 400px;
  }
`
export const GraphHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  background: ${Props => Props.theme.colors.pri};
  h3 {
    color: #fff;
  }
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
  color: #0a0;
  :first-child {
    color: #000;
  }
  :last-child {
    color: #c00;
  }
`
export const Graph = styled.div`
  width: 700px;
  @media (max-width: 768px) {
    max-width: 650px;
  }

`
export const Graph1 = styled.div`
  width: 100%;
  max-width: 300px;
  @media (max-width: 1100px) {
    max-width: 500px;
  }
`
export const User = styled.button`
  width: 300px;
  min-height: 60px;
  display: flex;
  align-items:center;
  gap: 1rem;
  background: #f4f4f4 !important;
  border: none;
  :hover {
    filter: brightness(.8);
  }
  p {
    color: #000;
  }
`
export const Image = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 40px;
  }
`
export const ScrollContent = styled.div`
  width: 400px;
  height: 300px;
  overflow-y: scroll;
  display: flex;
  align-items:center;
  gap:.5rem;
  flex-direction:column
`