import styled from 'styled-components';

export const Buttonb = styled.div`
  padding: 0 1rem;
  height: 40px;
  border-radius: 20px;
  color: #fff;
  background: ${Props => Props.theme.colors.pri};
  display: flex;
  align-items:Center;
  justify-content: center;
  :hover {
    filter: brightness(.8);
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`