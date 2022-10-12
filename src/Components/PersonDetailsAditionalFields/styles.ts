import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
`
export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 1rem;
`
export const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Box = styled.div`
  width: 100%;
  min-width: 300px;
  display: flex;
  align-items:Center;
  flex-direction: column;
  flex: 1;
`
export const BoxContent = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items:start;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  background: ${Props => Props.theme.colors.bac};
  gap: 1rem;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
`