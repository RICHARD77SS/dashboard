import styled from 'styled-components'

export const Forms = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  align-items:Center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  gap: 1rem;
  padding:1rem;
    button {
    border-radius: 20px;
    background: ${Props => Props.theme.colors.red};
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.4);
    color: ${Props => Props.theme.colors.pri};
    padding: .5rem;
  }
  button[type=submit] {
    background: ${Props => Props.theme.colors.green};
    color: #fff;
  }
`
