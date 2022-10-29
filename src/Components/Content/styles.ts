import styled from 'styled-components'

export const Flexstart = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  display: flex;
  gap: 1rem;
  align-items:center;
  justify-content: center;
  @media (max-width: 1100px){
    flex-wrap:wrap;
  }
  @media (max-width: 768px){
    flex-direction: column;
  }
` 