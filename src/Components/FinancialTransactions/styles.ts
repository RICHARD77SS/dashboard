import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`

export const Flex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:start;
  gap: 1rem;
  
`

export const Box = styled.div`
  width: 80%;
  height: auto;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
   box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
`

export const Top = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: center;
  gap: .5rem;
  padding: 1rem;
`

export const Classification = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items:center;
  gap: .5rem;
  .a {
    background: #B0E0E6;
  }
  .b {
    background: #ff8FD8;
  }
  .c {
    background: #FFE4C4;
  }
  .d {
    background: #DB7093;
  }
`

export const BoxColor = styled.div`
  width: 50px;
  height: 10px;
`

export const Graph = styled.div`
  width: 100%;
  height: 300px;
`

export const Aside = styled.div`
  width: 20%;
  height: auto;
  display: flex;
  align-items:center;
  flex-direction: column;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
`

export const AsideHeader = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  border-bottom: 1px solid ${Props => Props.theme.colors.sec};
`

export const AsideContent = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items:center;
  hr {
    width: 100%;
    height: 1px;
    margin: .5rem 0;
  }
  span {
    color: red;
  }
  b {
    color: black;
  }
  p{
    color: green;
    margin-top: .4rem;
    :nth-child(2) {
      background: ${Props => Props.theme.colors.pri};
      padding: .4rem 1rem;
      color:#fff;
    }
  }
  button {
    border: 1px solid ${Props => Props.theme.colors.pri};
    border-radius: 10px;
    padding: .5rem 1rem;
    color: ${Props => Props.theme.colors.pri};
    font-weight: 600;
  }
`

export const Flex2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-wrap: wrap;
  padding: .5rem;
  background: ${Props => Props.theme.colors.bac};
  border-radius: 10px;
  gap: .5rem;
  input {
    min-width: 150px;
    flex: 1;
  }
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
`

export const Block = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
  .button1 {
    background: #fff;
    border: 1px solid ${Props => Props.theme.colors.pri};
    color: ${Props => Props.theme.colors.sec};
  }
  .button2 {
    background: green;
  }
  .button3 {
    background: red;
  }
`

