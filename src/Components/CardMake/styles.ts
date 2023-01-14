import styled from 'styled-components'
import Button from '../Button'


export const Content = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  align-items:center;
  flex-direction:column;
  gap: 1rem;
`
export const Box = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  align-items:center;
  flex-direction:column;

`
export const BoxContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  justify-content:space-between;

`
export const BoxFlex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:center;
  gap: 1rem;
`

export const Side = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items:start;
  justify-content: space-between;
  background: #fcc;
  padding: 1rem;
`

export const Make = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items:Center;
  flex-direction: column;
`

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const CardBack = styled.div`
  background: #eee;
  border-radius: 10px;
`
export const BgButton = styled(Button)`
  background: transparent;
  width: 100px;
  height: 80px;
  padding: 0;
`
export const Backgrounds = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items:start;
  gap: .5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-top: 2rem;
  background:#ccc;
`

export const Bg = styled.div`
  min-width: 100px;
  height: 80px;
  border-radius: 10px;
  background: #555;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  input {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  h5 {
    position: absolute;
  }
`
