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
export const Block = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items:Center;
  flex-direction: column;
`
export const Flex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items:Center;
  justify-content: center;
  gap: .5rem;
  input {
    height: 30px;
  }
  @media (max-width: 1000px){
    flex-wrap: wrap;
  }
`