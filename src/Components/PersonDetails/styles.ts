import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  bottom: 0;
  right: 0;
  
`

export const Top = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  align-items:start;
  justify-content: space-between;
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  background: ${Props => Props.theme.colors.bac};
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.4);
  button {
    background: ${Props => Props.theme.colors.pri};
    padding: .5rem;
    border-radius: 20px;
    color: #fff;
  }
`

export const Image = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: #ddd;
  img {
    width: 100%;
    height: 100%;
  }
`
export const BasicInfos = styled.div`
  width: auto;
  display: flex;
  align-items:start;
  justify-content: start;
  flex-direction: column;
`
export const Block = styled.div`

`
export const BlockContainer = styled.div`
 width: 100%;
 max-width: 1200px;
 display: flex;
 align-items:flex-start;
 gap: 1rem;
`
export const Aside = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  flex-direction:column;
  gap: 1rem;
`
export const Box = styled.div`
  width: 100%;
`
export const Group = styled.div`
  width: 100%;
  height: auto;
  padding: .5rem;
  border: .5px solid black;
  display: flex;
  align-items:Center;
  border-radius: 10px;
  gap: 1rem;
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;

  }
`
export const Infos = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  background: ${Props => Props.theme.colors.bac};
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.4);
`
export const RemoveConteiner = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items:center;
  flex-direction: column;
  gap: 1rem;
  background: ${Props => Props.theme.colors.bac};
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.4);
`
export const ModalContainer = styled.div`
  position:fixed;
  display: flex;
  align-items:center;
  justify-content:center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255,255,255,0.4);
`
export const Modal = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  gap: 2rem;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
  button {
    padding: 1rem;
    border-radius: 30px;
    background: ${Props => Props.theme.colors.pri};
    font-size: 1rem;
    color: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
  }
`