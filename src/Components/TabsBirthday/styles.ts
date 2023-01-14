import styled from 'styled-components';

export const TabContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:Center;
  flex-direction: column;
  background: ${Props => Props.theme.colors.bac};
  padding: 1rem;
  gap: 1rem;
  border-radius: 10px;

`
export const TabsButtons = styled.div`
  width: 100%;
  display: flex;
  align-items:Center;
  padding: 1rem 2rem;
  background: ${Props => Props.theme.colors.pri};
  gap: 1rem;
  border-radius: 10px;
  flex-wrap: wrap; 
  .active {
    background: ${Props => Props.theme.colors.green};
    color: ${Props => Props.theme.colors.text};
  }
`