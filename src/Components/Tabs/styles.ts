import styled from 'styled-components';

export const TabContainer = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  align-items:Center;
  flex-direction: column;
  background: ${Props => Props.theme.colors.bac};
  padding: 1rem;
  gap: 1rem;
  border-radius: 10px;
  @media (max-width:1100px){
    width: 100%;
  }
`
export const TabsButtons = styled.div`
  width: 100%;
  display: flex;
  align-items:Center;
  padding: 1rem 2rem;
  background: ${Props => Props.theme.colors.pri};
  gap: 1rem;
  border-radius: 10px;
  .active {
    background: ${Props => Props.theme.colors.sec};
    color: ${Props => Props.theme.colors.bac};
  }
`