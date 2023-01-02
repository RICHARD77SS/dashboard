import styled from 'styled-components';

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
    color: ${Props => Props.theme.colors.text};
  }
  :last-child {
    color: #c00;
  }
`
export const Graph = styled.div`
  width: 100%;
`
export const MeetingsContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  border:.5px solid  ${Props => Props.theme.colors.shadow};
  padding: 1rem;
  background:${Props => Props.theme.colors.sec};
  h5{
    color: ${Props => Props.theme.colors.shadow};
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