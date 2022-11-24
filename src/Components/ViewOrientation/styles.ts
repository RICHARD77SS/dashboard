import styled from 'styled-components'

export const Form = styled.form`
  width: 300px;
  height: auto;
  display: flex;
  align-items:Center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  gap: 1rem;
  padding: 1rem;
  select {
    width: 260px;
    height: 30px;
    border-radius: 5px;
    border-color: #eee;
  }
  textarea{
    max-width: 290px;
    max-height: 300px;
  }
  button{
    padding: .5rem 1rem;
    background: ${Props => Props.theme.colors.sec};
    border-radius: 20px;
    color:${Props => Props.theme.colors.bac};
    display: flex;
    align-items:center;
    justify-content:center;
  }
`
export const Box = styled.div`
  width: 100%;
  min-height: 400px;
  height: auto;
  background: #fff;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  gap: 1rem;
  .navlink {
    flex:1;
    padding: 0 .5rem ;
    height: 60px;
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius: 5px;
    background: #E0FFFF;
    color: #000;
    text-decoration: none;
    font-size: 1rem;
  }
  .navlink.active{
    background: ${Props => Props.theme.colors.pri};
    color: #fff;
  }
  button{
    padding: .5rem 1rem;
    background: ${Props => Props.theme.colors.sec};
    border-radius: 20px;
    color:${Props => Props.theme.colors.bac};
    display: flex;
    align-items:center;
    justify-content:center;
  }
`
export const Modal = styled.form`
  width: 400px;
  height: 300px;
  display: flex;
  align-items:center;
  flex-direction: column;
  gap: .5rem;
  z-index: 20;
  position: fixed;
`
export const ModalContent = styled.form`
  width: 100%;
  height: 100%;
  z-index: 20;
  background:${Props => Props.theme.colors.bac};
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  button{
    padding: .5rem 1rem;
    background: #900;
    border-radius: 20px;
    color:${Props => Props.theme.colors.bac};
    display: flex;
    align-items:center;
    justify-content:center;
  }

`
export const ModalClose = styled.button`
  position: fixed;
  display: flex;
  align-items:center;
  justify-content:center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.4);
  z-index: 10;
`
export const User = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  align-items:center;
  justify-content:start;
  gap: .5rem;
  background: #eee;
  border-radius: 10px;
  padding: .5rem;
  border: none;
  img{
    width: 60px;
    height: 50px;
    border-radius: 5px;
  }
  a{
    color:#000;
  }
`
export const List = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items:center;
  justify-content:start;
  flex-direction:column;
  overflow-y:scroll;
  gap: .5rem;
  background: #eee;
  border-radius: 10px;
  padding: .5rem;
  border: none;
`
export const Disciplina = styled.button`
  width: 300px;
  height: auto;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  gap: .5rem;
  background: #eee;
  border-radius: 10px;
  padding: .5rem;
  border: none;
  img{
    width: 60px;
    height: 50px;
    border-radius: 5px;
  }
  a{
    color:#000;
  }
  p{
    color: #444;
    font-size: 1.2rem;
  }
  button {
    padding: .5rem;
    background: ${Props => Props.theme.colors.sec};
    color: #fff;
    border-radius: 5px;
    :first-child{
      background: #d00;
    }
  }
`