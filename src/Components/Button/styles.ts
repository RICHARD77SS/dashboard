import styled from 'styled-components';

export const Buttons = styled.button`
  width: auto;
  height: auto;
  background: transparent;
  border: none;
  display:flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    filter: brightness(.8);
  }
  a {
    text-decoration: none;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    align-items:Center;
    justify-content: center;
  }
`