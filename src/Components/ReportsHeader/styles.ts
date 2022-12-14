import styled from 'styled-components';

export const Header = styled.div`
 width: 100%;
  display: flex;
  align-items:center;
  gap: 1rem;
  padding: 1rem;
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 10px;
    background: ${Props => Props.theme.colors.sec};
    color: #fff;
  }
`
export const Foto = styled.div`
  width: 100px;
  height: 100px;
  background: #ccc;
  border-radius: 10px;
`
export const Block = styled.div`
  flex:1;
  width: auto;
  display: flex;
  align-items:start;
  flex-direction: column;
`