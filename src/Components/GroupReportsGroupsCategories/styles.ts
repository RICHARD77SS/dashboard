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
export const Top = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:Center;
  flex-direction: column;
  gap: 1rem;
`
export const Flex = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items:Center;
  justify-content: center;
`
export const Graph = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items:Center;
  justify-content: center;
`
export const Classification = styled.div`
  display: flex;
  align-items: center;
  margin: 0 .2rem;
  .a{
    background: #00BFFF;
  }
  .b{
    background: #32CD32;
  }
  .c{
    background: #FF4500;
  }
  .d{
    background: #9400D3;
  }
  .e{
    background: #FFE4C4;
  }
  .f{
    background: #0000FF;
  }
  .g{
    background: #8B4513;
  }
  .h{
    background: #453467;
  }
  p{
    font-size: .8rem;
  }
`
export const BoxColor = styled.div`
  width: 40px;
  height: 10px;
  margin: 0 .2rem;
  
`