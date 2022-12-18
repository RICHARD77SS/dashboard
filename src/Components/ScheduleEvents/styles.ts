import styled from 'styled-components';

export const ButtonCont = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: end;
  padding: 1rem;
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.sec};
    color: #fff;
    font-size: 1rem;
  }
`
export const EventBox = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #ddd;
  h3{

  }
  h4{

  }
  p{

  }
  img {
    width: 100px;
    height: 100px;
  }
  a{
    color: #000;
  }
`
export const EventBlock = styled.div`
  width: auto;
  display: flex;
  align-items:center;
  justify-content: start;
  flex-direction: column;
  button {
    padding: 0 1rem;
    height: 30px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.sec};
    color: #fff;
    font-size: 1rem;
  }
`