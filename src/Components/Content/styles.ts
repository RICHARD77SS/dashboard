import styled from 'styled-components'

export const Flexstart = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  display: flex;
  gap: 1rem;
  align-items:flex-start;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
` 