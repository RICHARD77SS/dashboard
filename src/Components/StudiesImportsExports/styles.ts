import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`
export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  justify-content:center;
  padding: 1rem;
  gap: 1rem;
`
export const Box = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background:${Props => Props.theme.colors.bac};

`
export const BoxHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px 10px 0 0;
  background: ${Props => Props.theme.colors.pri};
  border-bottom: 1px solid ${Props=>Props.theme.colors.sec};
  h3{
    color: #fff;
  }
`
export const BoxContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    color: #fff;
    font-size: 1rem;
    background: ${Props => Props.theme.colors.sec};
  }
`