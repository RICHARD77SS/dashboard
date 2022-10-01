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
  width: 90%;
  @media (max-width: 1100px) {
    width: 40%;

  }
`