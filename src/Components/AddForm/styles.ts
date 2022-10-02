import styled from 'styled-components';
import Input from "../Input";
import Button from '../Button';
export const Inputs = styled(Input)`
  width: 300px;
`
export const Buttons = styled(Button)`
  background: ${Props => Props.theme.colors.pri};
  padding: 1rem;
  color: #fff;
`
