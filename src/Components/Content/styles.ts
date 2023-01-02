import styled from 'styled-components'

export const Flexstart = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  gap: 1rem;
  align-items:start;
  justify-content: center;
  flex-wrap:wrap;
  @media (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
` 