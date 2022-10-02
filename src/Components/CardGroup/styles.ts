import styled from 'styled-components';

export const Card = styled.div`
  width: 200px;
  height: 300px;
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
`