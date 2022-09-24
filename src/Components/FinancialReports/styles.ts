import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items:flex-start;
  gap: 1rem;
  padding: 1rem;
`
export const SideNavigator = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  min-width: 300px;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);

`

export const SideContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 1rem;
  gap: 1rem;
  .navlink{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${Props => Props.theme.colors.pri};
    width: 100%;
    height: 30px;
    background: #f4f4f4;
    border-radius: 5px;
    font-size: 1rem;
    border: 1px solid ${Props => Props.theme.colors.pri};
    margin: .2rem 0;
    :hover {
      filter: brightness(.8);
    }
  }
  .navlink.active {
    background: ${Props => Props.theme.colors.sec};
    color: #f4f4f4;
  }
`

export const Group = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
`

export const Box = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 1rem;
`

export const TopOptions = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items:start;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  background: ${Props => Props.theme.colors.bac};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
  border-radius: 10px;
  input {
    max-width: 150px;
  }
` 

export const InputBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items:start;
  flex-direction: column;
  :first-child {
    border: 1px solid ${Props => Props.theme.colors.pri};
    padding: 1rem;
    border-radius: 10px;
  }
  :nth-child(2) {
     border: 1px solid ${Props => Props.theme.colors.pri};
     padding: 1rem;
     border-radius: 10px;
  }
` 

export const InputFlex = styled.div`
  display: flex;
  align-items:center;
`
