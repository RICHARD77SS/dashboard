import styled from 'styled-components';


export const Wrapper = styled.div`


`
export const Droped = styled.div`
  width:250px;
  height: auto;
  background: ${Props => Props.theme.colors.pri};
  padding: 1rem;
  position: absolute;
  top: 50px;
  border-radius: 10px;
  @media (max-width: 769px){
    background: #ddd;
    width: 400px;
    left: 75%;
    top:4rem;
  }
`
