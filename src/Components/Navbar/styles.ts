import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Props => Props.theme.colors.pri};
  position: fixed;
  z-index: 50;
  top: 50px;
  button{
    font-size: 1rem;
    height: 50px;
    width: 100px;
    color: #fff;
    :hover {
      background: rgba(255,255,255,0.2)
    }
  }
  .navlink {
    text-decoration: none;
  }
`
export const Vbar = styled.div`
  width: .5px;
  height: 100%;
  background: rgba(0,0,0,0.5);
`