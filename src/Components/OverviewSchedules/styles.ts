import styled from 'styled-components';

interface Props {
  backColor?: string;
  textColor?: string;
}
export const Buttonb = styled.div`
  padding: 0 1rem;
  height: 40px;
  border-radius: 20px;
  color: ${Props => Props.theme.colors.text};
  background: ${Props => Props.theme.colors.pri};
  display: flex;
  align-items:Center;
  justify-content: center;
  :hover {
    filter: brightness(.8);
  }
  a {
    text-decoration: none;
  }
`
export const Anotation = styled.div`
  width: 100%;
  height: 30px;
  background: #f4f4f4;
  display: flex;
  align-items:Center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    filter: brightness(.8);
  }
  h3{
    text-decoration: underline;
  }
`
export const Mural = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 
`
export const MuralContent = styled.div<Props>`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${Props => Props.backColor};
  border-radius: 10px;
  h3{
    color: ${Props => Props.textColor};
  }
  img {
    width: 100%;
    height: 100%;
    border-radius:10px;
  }
`
export const Scroll = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  justify-content: start;
  border-radius: 10px;
  overflow-x:scroll;
  .control {
    position:absolute;
  }
  .control.right{
    left: 24rem;
  }
`