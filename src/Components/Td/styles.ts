import styled from 'styled-components'


export const TdSt = styled.td` 
  border: 1px solid ${Props => Props.theme.colors.sec};
  height: 30px;
  padding: 0 .5rem;
  a {
    color: #000;
  }
  img{
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
`