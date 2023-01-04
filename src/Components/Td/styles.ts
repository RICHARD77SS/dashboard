import styled from 'styled-components'


export const TdSt = styled.td` 
  height: 30px;
  padding: 0 .5rem;
  img{
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
  button{
    border: .5px solid ${Props => Props.theme.colors.shadow};
    color: ${Props => Props.theme.colors.text};
    :first-child{
      background: ${Props => Props.theme.colors.green};
      color:${Props => Props.theme.colors.bac};
    }
    :last-child{
      background: ${Props => Props.theme.colors.red};
      color:${Props => Props.theme.colors.bac};
    }
  }
`