import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  align-items:Center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${Props => Props.theme.colors.pri};
  border-radius: 10px;
`
export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:Center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${Props => Props.theme.colors.pri};
  border-radius: 10px;
`
