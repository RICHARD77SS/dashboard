import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items:Center;
  flex-direction: column;
`
export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:Center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  input[type=search]{
    align-self: flex-end;
    width: 210px;
    height: 30px;
    margin: 0 2rem;
    transform: translateY(-10px);
    font-size: 1rem;
    @media (max-width: 768px) {
      align-self: center;
    }
  }
  hr{
    width: 100%;
    height: 1px;
    margin: 1rem 0;
  }
`

export const TabButton = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: .5rem;
  .navlink {
    flex:1;
    padding: 0 .5rem ;
    height: 60px;
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius: 5px;
    background: #eccf;
    color: #000;
    text-decoration: none;
    font-size: 1rem;
  }
  .navlink.active{
    background: ${Props => Props.theme.colors.pri};
    color: #fff;
  }
`

export const TabContent = styled.div`
  width: 100%;
  height: auto;
  background: #ecceec;
` 