import styled from 'styled-components'

interface Props {
  backColor?: string;
  textColor?: string;
}
export const Buttons = styled.button`
  min-height: 40px;
  padding: 0 1rem;
  border-radius: 20px!important; 
  display: flex;
  align-items:center;
  justify-content: center;
  color: #fff;
  background: ${Props => Props.theme.colors.sec};
  border: none;
  :hover{
    filter: brightness(.7);
  }
`
export const Mural = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 
`
export const MuralContent = styled.div<Props>`
  width: 150px;
  height: 150px;
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
export const FlexContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
` 