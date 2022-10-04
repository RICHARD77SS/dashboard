import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

`

export const Content = styled.div`
  width: 400px;
  height: auto;
  background: #fff;
  border-radius: 10px;
  z-index: 10;
`

export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

`

export const BoxHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: .5px solid black;
  border-radius: 10px 10px 0 0;
    button {
      padding: .5rem;
      border-radius: 20px;
      background: #ddd;
      box-shadow: 0 0 5px 0 rgba(0,0,0,0.5);
    }
`

export const BoxContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: .5rem;
  padding: 1rem 0;
  input[type=text]{
    width: 350px;
  }
  textarea{
    min-width: 350px;
    max-width: 350px;
    max-height: 300px;
  }
`
export const BoxFlex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`
export const BoxBLock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Bg = styled.div`
  width: 90px;
  height: 50px;
  border-radius: 10px;
  background: #555;
  display: flex;
  align-items:center;
  justify-content: center;
`

export const BoxFooter = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items:center;
  justify-content:center;
  border-radius: 0 0 10px 10px;
  border-top: .5px solid black;
  button {
    padding: .5rem;
    background: ${Props => Props.theme.colors.pri};
    color: #fff;
    border-radius: 20px;
    font-size: 1rem;
  }
`
export const Closed = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.4);
  z-index: 0;
`