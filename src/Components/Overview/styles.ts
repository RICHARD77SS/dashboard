import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 6rem 1rem;

`

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  h3 {
    color: #fff;
  }
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.sec};
    color: #fff;
    font-size: 1rem;
    :hover {
      background: #ccc;
      color: ${Props => Props.theme.colors.sec};
    }
  }
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`
export const Box = styled.div`
  min-width: 300px;
  flex: 1;
  min-height: 300px;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  border: 1px solid ${Props => Props.theme.colors.pri};
`
export const BoxHeader = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  border-bottom: 1px solid ${Props => Props.theme.colors.pri};
  padding: 1rem;
  border-radius: 10px 10px 0 0;
  background: ${Props => Props.theme.colors.pri};
  h3 {
    color: #fff;
  }
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.sec};
    margin: 0 .5rem;
    color: #fff;
    font-size: 1rem;
    :hover {
      background: #ccc;
      color: ${Props => Props.theme.colors.sec};
    }
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

`

export const Cad = styled.div`
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
`
export const CadHeader = styled.div`
  border-radius: 10px 10px 0 0;
  background: ${Props => Props.theme.colors.pri};
  h3 {
    color: #fff;
  }
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.sec};
    margin: 0 .5rem;
    color: #fff;
    font-size: 1rem;
    :hover {
      background: #ccc;
      color: ${Props => Props.theme.colors.sec};
    }
  }
`
export const CadContent = styled.div`
  
`
export const GraphContainer = styled.div`
  width: 90%;
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
export const Graph = styled.div`
  width: 90%;
  height: 250px;
  background: #fff;
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