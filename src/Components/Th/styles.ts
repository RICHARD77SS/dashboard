import styled from 'styled-components'


export const ThSt = styled.th` 
  border: 1px solid ${Props => Props.theme.colors.sec};
  height: 40px;
  background: #eef;
  button{
    color: ${Props => Props.theme.colors.text};

  }
  :hover {
    filter: brightness(.8);
  }
`