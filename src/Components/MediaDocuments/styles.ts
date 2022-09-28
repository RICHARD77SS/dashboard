import styled from 'styled-components'


export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  button {
    padding: 0 1rem;
    height: 30px;
    background: ${Props => Props.theme.colors.sec};
    border-radius: 10px;
    color:#fff;

  }
`
export const FlexBetween = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  justify-content: space-between;
`