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
export const Anotation = styled.div`
  width: 100%;
  height: 30px;
  background: #f4f4f4;
  display: flex;
  align-items:Center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    filter: brightness(.8);
  }
  p{
    text-decoration: underline;
  }
`