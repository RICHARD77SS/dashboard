import styled from 'styled-components'

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
export const Aside = styled.form`
  width: 30%;
  min-width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`
export const Video = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background:#eee;
`
export const MediaVideo = styled.form`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
    background:#ddd;
`