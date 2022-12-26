import styled from 'styled-components';

export const AsideContent = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Props => Props.theme.colors.bac};
  box-shadow: inset 0 0 10px rgba(0,0,0,0.4);

`
export const FormContainer = styled.div`
  width: 300px;
`
export const Span = styled.h5`
  font-size: 1rem;
  background: #ce3e;
  padding: .5rem;
`
