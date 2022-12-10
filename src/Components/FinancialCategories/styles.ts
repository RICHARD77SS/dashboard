import styled from 'styled-components'

export const Block = styled.div`
  width: 70%;
  height: auto;
  border: 1px solid red;
  border-radius: 10px;
  :first-child {
    border: 1px solid green;
  }
  .red {
    background: red;
  }
  @media (max-width: 768px){
    width: 100%;
  }
`
export const BlockHeader = styled.header`
  width: 100%;
  height: 60px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items:center;
  justify-content: center;
  background: green;

`
export const BlockContent = styled.div` 
  width: 100%;
  display: flex;
  align-items:center;
  flex-direction: column;
  justify-content: center;
  padding: .5rem;
`
export const Aside = styled.form`
  width: 30%;
  min-width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
`

export const AsideHeader = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items:center;
  justify-content: center;
  background: ${Props => Props.theme.colors.pri};
  color: #fff;
`
export const AsideContent = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  textarea {
    max-width: 300px;
    min-height: 100px;
    max-height: 300px;
  }
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.sec};
    color: #fff;
    font-size: 1rem;
  }
`