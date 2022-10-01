import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  align-items:flex-start;
  padding: 1rem;
  gap: 1rem;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`
export const Flex = styled.div`
  width: 55%;
  height: auto;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 1100px) {
    width: 100%;
  }
`
export const MiniBox = styled.div`
  min-width: 250px;
  height: 200px;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  .red {
    color: red;
    border-color: red;
  }
`
export const HeaderMiniBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  justify-content:center;
  border-bottom: 1px solid green;
  color: green;
  padding: 1rem;
`
export const ContentMiniBox = styled.div`
  width:100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 1rem;
  gap: 1rem;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .2rem;
  button {
    color: ${Props => Props.theme.colors.sec};
    display: flex;
    align-items:center;
    gap: .5rem;
  }
  button:hover {
    background: #eee;
    border-radius: 5px;
  }
  p {
    background: #ccc;
    border-radius: 5px;
    font-size: .8rem;
  }
`
export const Block = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction:column;
  gap: 1rem;
  @media (max-width: 1100px) {
    width: 100%;
  }
`
export const MidBox = styled.div`
  width: 100%;
  height: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction:column;
  background: ${Props => Props.theme.colors.bac};
  border-radius: 10px;
  button {
    padding: 1rem;
    font-size: 1rem;
    margin: .5rem;
  }
  .buscar {
    width: 90%;
     background: ${Props => Props.theme.colors.pri};
    color: #fff;
    border-radius: 10px;
  }
  input {
    width: 90%;
    margin-top: 1rem;
  }
`
export const MidHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: .5rem;
  h3 {
    flex:1;
  }
  p {
    font-size: 1rem;
  }
  input {
    width: 200px;
  }
  button  {
    background: ${Props => Props.theme.colors.pri};
    color: #fff;
    border-radius: 10px;
    padding: .5rem 1rem;
    margin: 0 ;
  }
`
export const MidContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:Center;
  flex-direction: column;
  padding: 1rem;
`

export const Pagamentos = styled.div`
  width: 200px;
  height: 200px;
  overflow-y: scroll;
`