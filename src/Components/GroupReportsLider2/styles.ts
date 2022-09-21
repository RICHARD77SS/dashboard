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