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
export const Container = styled.form`
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items:center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`