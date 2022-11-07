import styled from 'styled-components';


export const Wrapper = styled.div`


`
export const Droped = styled.div`
  width:260px;
  height: auto;
  background: ${Props => Props.theme.colors.pri};
  padding: 1rem;
  position: absolute;
  top: 50px;
  border-radius: 10px;
  @media (max-width: 769px){
    background: #ddd;
    width: 400px;
    left: 70%;
    top:29rem;
  }
`
