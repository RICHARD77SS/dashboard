import styled from 'styled-components';

export const Buttons = styled.button`
  width: auto;
  height: auto;
  background: transparent;
  border: none;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: ${Props => Props.theme.colors.text};
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: ${Props => Props.theme.colors.hover};
  }
  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items:Center;
    justify-content: center;
  }
`