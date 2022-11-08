import styled from 'styled-components';


export const Content = styled.div`
  width: 50px;
  height: 50px;
  display: none;
  z-index: 100;
  position: absolute; 

  @media (max-width:769px){
    display: flex;
    button {
      display: flex;
      font-size: 2rem;
    }
  }
`
export const Container = styled.div`
  width: 300px;
  height: auto;
  background: ${Props => Props.theme.colors.pri};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  left: 0;
  top: 100px;
  z-index: 100;
  .navlink {
    color: #fff;
    font-size: 1.2rem;
  }
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.2);
  z-index: 10;
`