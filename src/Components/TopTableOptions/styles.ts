import styled from 'styled-components'

export const Flex = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  @media (max-width: 786px){
    flex-direction: column;
    height: 120px;
  }
`
export const Results = styled.div`
  display: flex;
  align-items:center;
  height: 50px;
  input{
    width: 80px;
    height: 40px;
  }
`
export const Options = styled.div`
  display: flex;
  align-items:center;
  gap: 0.5rem;
  button {
    background: ${Props => Props.theme.colors.sec};
    padding: 0 1rem;
    height: 40px;
    color: #fff;
    font-size: 1rem;
    border-radius: 5px; 
    :hover {
      filter: brightness(1.3);
    }
  }
`