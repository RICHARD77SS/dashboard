import styled from 'styled-components';

export const BoxRet = styled.div`
  width: 100%;
  flex: 1;
  min-height: 150px;
  max-height: 150px;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.bac};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 1rem;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
`
export const BoxRetHeader = styled.header`
  width: 100%;
  height: 30%;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 10px 10px 0 0;
  background: ${Props => Props.theme.colors.pri};
  color: #fff;
  button {
    height: 30px;
    padding: 0 1rem;
    color: #fff;
    font-size: 1rem;
    border-radius: 10px;
    background: ${Props => Props.theme.colors.sec};
  }

`
export const BoxRetContent = styled.div`
  width: 100%;
  height: 70%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  input{
    width: 100px;
    height: 30px;
    border-radius: 0;
  }
  span {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${Props => Props.theme.colors.pri};
  }
`
export const DivLink = styled.div`
  width: auto;
  height: 30px;
  padding: 0 .5rem;
  display: flex;
  align-items: center;
  background: #eee;
  p{
    font-size: .8rem;
  }
`
export const LinkPub = styled.div`
  width: 100%;
  height: 70%;
`