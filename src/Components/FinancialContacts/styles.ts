import styled from "styled-components";

export const Aside = styled.div`
  width: 40%;
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.sec};
    color: #fff;
    font-size: 1rem;
  }
  textarea {
    width: 100%;
    height: 100px;
    border-radius: 5px;
    border-color: ${Props => Props.theme.colors.pri};
  } 
`
