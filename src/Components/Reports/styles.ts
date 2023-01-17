import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

`
export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items:start;
  gap: 1rem;

`
export const Sidebar = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  align-items:center;
  flex-direction: column;
  background: ${Props => Props.theme.colors.bac};
  border-radius: 10px;
  border: 1px solid ${Props => Props.theme.colors.pri};
`
export const Header = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${Props => Props.theme.colors.sec};
  display: flex;
  align-items:center;
  padding: 0 1rem;
`
export const SideContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  flex-direction: column;
  padding: 1rem;
  gap: .5rem;
  .navlink{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${Props => Props.theme.colors.text};
    width: 100%;
    height: 30px;
    background:  ${Props => Props.theme.colors.pri};
    border-radius: 5px;
    font-size: 1rem;
    border: 1px solid ${Props => Props.theme.colors.pri};
    :hover {
      filter: brightness(.8);
    }
  }
  .navlink.active {
    background: ${Props => Props.theme.colors.sec};
    color: #393;
  }
`
export const GraphContainer = styled.div`
  width: 70%;
  height: auto;
  min-height: 300px;
  display: flex;
  align-items:center;
  flex-direction: column;
  background: ${Props => Props.theme.colors.bac};
  border-radius: 10px;
  border: 1px solid ${Props => Props.theme.colors.pri};
`
export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  flex-direction: column;
  background: ${Props => Props.theme.colors.bac};
  border-radius: 10px;
  border: 1px solid ${Props => Props.theme.colors.pri};
`