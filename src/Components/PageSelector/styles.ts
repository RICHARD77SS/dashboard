import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  align-items:center;
  margin: 1rem 0;
  button {
    height: 40px;
    padding: 0 1rem;
    background: ${Props => Props.theme.colors.sec};
    font-size: 1rem;
    color: ${Props => Props.theme.colors.text};
    :nth-child(2){
      background: #fff;
      color: #000;
    }
    :hover {
      filter: brightness(1.3);
    }
  }
`