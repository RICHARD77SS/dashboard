import styled from 'styled-components';

export const Inputc = styled.input`
  border-radius: 5px;
  height: 30px;
  border: 1px solid ${Props=>Props.theme.colors.pri};
  color: ${Props => Props.theme.colors.text};
  background: #f4f4f4;
  :focus {
    border: none;
    outline: none;
  }
`