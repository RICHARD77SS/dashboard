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
    color: #000;
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
  height: 60px;
  border-radius: 10px;
  border:.5px solid rgba(0,0,0,0.4);
  padding: 1rem;
  
`