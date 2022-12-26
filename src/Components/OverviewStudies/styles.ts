import styled from 'styled-components';

export const Description = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin: .3rem;
  }
  p{

  }
`
export const Divf = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Output = styled.div`
  width: 100%;
  height: 40px;
  background: #ccc;
`
export const Studie = styled.div`
  width: 100%;
  height: 100px;
  background: #f4f4f4;
  display: flex;
  align-items:center;
  gap: 1rem;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    filter: brightness(.8);
  }
  button{
    width: auto;
    height:auto;
    background:transparent;
    img {
     width: 100px;
     height: 100px;
   }
  }
  p{
    color:#000;
  }
  h4{
    color:#000;
  }
`
export const Image = styled.div`
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
`