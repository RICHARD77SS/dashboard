import styled from 'styled-components';

export const Inputc = styled.input`
  border-radius: 5px;
  height: 30px;
  border: none;
  color: ${Props => Props.theme.colors.text};
  :focus {
    border: none;
    outline: none;
  }
`