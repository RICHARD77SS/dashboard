import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  height: 500px;
  border-radius: 10px;
  display:flex;
  align-items:center;
  justify-content: start;
  flex-direction: column;
  gap: .1rem;
  background: ${Props => Props.theme.colors.pri};
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.8);
  h4 {
    margin-top: 3rem;
  }
  button {
    width: 90%;
    min-height: 40px;
    border-radius: 20px;
    margin: 1rem;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 1rem;
    color: #f4f4f4;
    border:1px solid #f4f4f4;
  }
`
export const CardBg = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px 10px 0 0;
  img{
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
 }
`
export const CardImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  position: absolute;
  transform: translateY(3rem);
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.8);
  img{
    width: 100%;
    height:100%;
    border-radius: 20px;
 }
`
export const Liders = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SubLiderImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.8);
  transform: translatey(1rem);
  img{
    width: 100%;
    height:100%;
    border-radius: 40px;
 }
 p {
   display: none;
   color: #fff;
   width: 70px;
   overflow: hidden;
 }
  :hover p {
   display: block;
 }
`
export const LiderImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.8);
  img{
    width: 100%;
    height:100%;
    border-radius: 40px;
 }
 p {
   display: none;
   color: #fff;
   width: 70px;
   overflow: hidden;
 }
  :hover p {
   display: block;
 }
`
export const User = styled.div`
  width: 300px;
  min-height: 60px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  gap: 1rem;
  background: #f4f4f4 !important;
  border: none;
  :hover {
    filter: brightness(.8);
  }
  p {
    color: #000;
  }
  button{
    width: 100%;
    color:#fff;
    p{
      color:#fff;
      margin: 0 .5rem;
    }
  }
`
export const Image = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 40px;
  }
`
export const ModalContainer = styled.div`
  top:0;
  left:0;
  bottom:0;
  right:0;
  position: fixed;
  background: rgba(0,0,0,0.4);
  z-index: 10;
  display: flex;
  align-items:Center;
  justify-content: center;
`
export const ModalContent = styled.form`
  width: 300px;
  min-height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items:Center;
  gap: 1rem;
  padding: 1rem;
  background: ${Props => Props.theme.colors.bac};
  z-index: 30;
  button:first-child{
    background: #900;
    border-radius: 40px;
  }
  h3{
    color: ${Props => Props.theme.colors.text};
  }
  select {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    font-size: 1rem;
  }
  option {
    font-size: 1rem;
    border-radius: 5px;
  }
`
export const ModalClose = styled.div`
  top:0;
  left:0;
  bottom:0;
  right:0;
  position: fixed;
  background: rgba(0,0,0,0.4);
  z-index: 20;
`

export const Persons = styled.div`
    width: 90%;
    height: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items:Center;
    padding: 1rem;
    border: 1px solid ${Props => Props.theme.colors.sec};
  `
export const BoxContent = styled.div`
  width: 100%;
  height: 440px;
  padding: 1rem;
  display: flex;
  align-items:center;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  background: ${Props => Props.theme.colors.bac};
  gap: 1rem;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
  button {
    height: 30px;
    padding: 0 1rem;
    color: #fff;
    font-size: 1rem;
    border-radius: 10px;
    background: ${Props => Props.theme.colors.sec};
  }
  a {
    color: ${Props => Props.theme.colors.text};
  }
  textarea {
    max-width: 100%;
    min-width: 90%;
    max-height: 100%;
    min-height: 150px;
  }
`