import styled from 'styled-components'

export const Block = styled.div`
  width: 50%;
  height: auto;
  border: 1px solid red;
  border-radius: 10px;
  :first-child {
    border: 1px solid green;
  }
  .red {
    background: red;
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
export const Aside = styled.div`
  width: 20%;
  min-width: 200px;
  height: auto;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  margin-right: 1rem;
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
    width: 100%;
    min-height: 100px;
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